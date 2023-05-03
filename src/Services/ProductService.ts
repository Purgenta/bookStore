import database from "../Database/database.js";
import { Request, Response } from "express";
import { Prisma, User } from "@prisma/client";
import { Product } from "@prisma/client";
import { plainToClass } from "class-transformer";
import { ProductDTO } from "../Models/ProductDTO.js";
import ReviewService from "./ReviewService.js";
class ProductService {
  private IS_SELLING = true;
  private QUANTITY = 1;
  private reviewService: ReviewService;
  constructor() {
    this.reviewService = new ReviewService();
  }
  async getFilteredProducts(req: Request, res: Response) {
    let {
      limit,
      page,
      priceLowerBound,
      priceUpperBound,
      publishedDateLowerBound,
      publishedDateHigherBound,
    } = req.query;
    let itemLimit = 15;
    if (limit) itemLimit = parseInt(limit as string);
    let skip = 0;
    if (page) skip = itemLimit * parseInt(page as string);
    try {
      type Filter = Parameters<typeof database.product.findMany>;
      const filter: Filter[0] = {
        skip,
        take: itemLimit,
        include: {
          productImages: true,
          sale: true,
        },
        where: {
          is_selling: this.IS_SELLING,
          quantity: {
            gte: this.QUANTITY,
          },
          price: {
            gte: priceLowerBound ? +priceLowerBound : undefined,
            lte: priceUpperBound ? +priceUpperBound : undefined,
          },
          publishing_date: {
            gte: publishedDateLowerBound as string | undefined,
            lte: publishedDateHigherBound as string | undefined,
          },
        },
        orderBy: {
          price: "desc",
        },
      };
      const products = await database.product.findMany(filter);
      const hasNextPage = await database.product.count();
      res
        .json({
          products: plainToClass(ProductDTO, products, {
            excludeExtraneousValues: true,
          }),
          hasNextPage,
        })
        .send();
    } catch (error) {
      res.status(500).send();
    }
  }
  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await database.product.findUniqueOrThrow({
        where: {
          id: +id,
        },
        include: {
          publisher: true,
          productImages: true,
          productType: true,
          author: true,
          genre: {
            select: {
              genre: true,
            },
          },
          sale: true,
        },
      });
      const avgRating = await database.review.aggregate({
        where: {
          id: +id,
        },
        _avg: {
          rating: true,
        },
      });
      let canReview = false;
      if (req.user) {
        canReview = await this.reviewService.checkUserReviewEligibility.call(
          this.reviewService,
          req.user,
          product.id
        );
      }
      res.json({
        product: plainToClass(
          ProductDTO,
          {
            ...product,
            avgRating: avgRating._avg.rating || 0,
            similiarProducts: await this.mostSimiliarProducts(+id),
          },
          { excludeExtraneousValues: true }
        ),
        canReview,
      });
    } catch (error) {
      res.status(404).send();
    }
  }
  private async getBestRated() {
    const bestRatedProducts = await database.$queryRaw<
      Product[]
    >(Prisma.sql`SELECT product.id
FROM product 
LEFT JOIN review ON review.product_id = product.id
LEFT JOIN productimages ON productimages.product_id = product.id
WHERE product.is_selling = TRUE AND product.quantity > 0
GROUP BY product.id
order BY AVG(review.rating) DESC
LIMIT 10`);
    const bestRatedId: number[] = bestRatedProducts.map((product) => {
      return product.id;
    });
    return await database.product.findMany({
      include: {
        productImages: true,
        sale: true,
      },
      where: {
        id: {
          in: bestRatedId,
        },
      },
    });
  }
  private async getNewestProducts() {
    const newestProducts = await database.product.findMany({
      take: 10,
      include: {
        productImages: true,
        sale: true,
      },
      where: {
        is_selling: true,
        quantity: {
          gte: 0,
        },
      },
      orderBy: {
        publishing_date: "desc",
      },
    });
    return newestProducts;
  }
  async getShowcasedProducts(req: Request, res: Response) {
    const newestProducts = await this.getNewestProducts();
    const bestRated = await this.getBestRated();
    res.json({
      newestProducts: plainToClass(ProductDTO, newestProducts, {
        excludeExtraneousValues: true,
      }),
      bestRated: plainToClass(ProductDTO, bestRated, {
        excludeExtraneousValues: true,
      }),
    });
  }
  async mostSimiliarProducts(product_id: number) {
    const usersThatHaveBoughtProduct = await database.$queryRaw<
      Array<{ id: number }>
    >`SELECT 
    user.id
FROM
    user
        INNER JOIN
    cart ON cart.user_id = user.id
        INNER JOIN
    cartitem ON cartitem.cart_id = cart.id
		INNER JOIN
	\`order\` ON \`order\`.cart_id = cart.id
WHERE
    cartitem.product_id = ${product_id} AND cart.status = "ISSUED_ORDER" AND \`order\`.order_status = "DELIVERED"
GROUP BY user.id`;

    const relatedItems = await database.cartItem.groupBy({
      by: ["product_id"],
      where: {
        product_id: {
          not: product_id,
        },
        cart: {
          user_id: {
            in: usersThatHaveBoughtProduct.map((user) => user.id),
          },
          status: "ISSUED_ORDER",
          order: {
            some: { order_status: "DELIVERED" },
          },
        },
      },
      orderBy: {
        _sum: {
          quantity: "desc",
        },
      },
    });
    if (relatedItems.length >= 5) {
      const items = relatedItems.slice(0, 5);
      return await database.product.findMany({
        include: {
          productImages: true,
          sale: true,
        },
        where: {
          id: {
            in: items.map((item) => item.product_id),
          },
        },
      });
    } else {
      const related = relatedItems.map((item) => item.product_id);
      const items = await database.product.findMany({
        include: {
          productImages: true,
          sale: true,
        },
        where: {
          id: {
            in: related,
          },
        },
      });
      return items.concat(
        await database.product.findMany({
          take: 5 - items.length,
          include: {
            sale: true,
            productImages: true,
          },
          where: {
            id: {
              notIn: [...related, product_id],
            },
          },
        })
      );
    }
  }
}
export default ProductService;

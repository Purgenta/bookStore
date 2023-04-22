import database from "../Database/database.js";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { Product } from "@prisma/client";
import { plainToClass } from "class-transformer";
import { ProductDTO } from "../Models/ProductDTO.js";
class ProductService {
  private IS_SELLING = true;
  private QUANTITY = 1;
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
      console.log(error);
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
          genre: true,
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
      res.json(
        plainToClass(
          ProductDTO,
          { ...product, avgRating: avgRating._avg.rating || 0 },
          { excludeExtraneousValues: true }
        )
      );
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
}
export default ProductService;

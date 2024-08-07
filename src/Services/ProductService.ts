import database from "../Database/database.js";
import { Request, Response } from "express";
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
      priceLb,
      priceUb,
      publishedDateLb,
      publishedDateUb,
      genres,
      orderBy,
      publishers,
      sort,
      q,
    } = req.body;
    let itemLimit = 15;
    if (limit) itemLimit = parseInt(limit as string);
    const genreId = genres as string[];
    const publisherId = publishers as string[];
    let skip = 0;
    try {
      if (page) skip = itemLimit * (parseInt(page as string) - 1);
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
          publisher: {
            id: {
              in: publisherId ? publisherId.map((publisher) => publisher) : [],
            },
          },
          quantity: {
            gte: this.QUANTITY,
          },
          title: {
            contains: q ? `${q}` : undefined,
          },
          price: {
            gte: priceLb ? priceLb : undefined,
            lte: priceUb ? priceUb : undefined,
          },
          publishing_date: {
            gte: publishedDateLb ? new Date(publishedDateLb) : undefined,
            lte: publishedDateUb ? new Date(publishedDateUb) : undefined,
          },
          genre: {
            every: {
              genre_id: {
                in: genreId ? genreId.map((genre) => genre) : [],
              },
            },
          },
        },
        orderBy: {
          [`${orderBy}`]: sort,
        },
      };

      const products = await database.product.findMany(filter);
      const totalPages =
        (await database.product.count({ where: { ...filter.where } })) /
        itemLimit;

      res
        .json({
          products: plainToClass(ProductDTO, products, {
            excludeExtraneousValues: true,
          }),
          totalPages: Math.ceil(totalPages),
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
          id: id,
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
          id: id,
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
            similiarProducts: await this.mostSimiliarProducts(id),
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
    const bestRatedProducts = await database.product.findMany({
      where: {
        is_selling: true,
        quantity: { gt: 0 },
      },
      include: {
        productImages: true,
        sale: true,
      },

      take: 10,
    });
    return bestRatedProducts;
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
  async getUsersThatHaveBoughtProduct(productId: string) {
    const cartItems = await database.cartItem.findMany({
      where: {
        product_id: productId,
      },
    });

    // Get all carts that contain these items and have status "ISSUED_ORDER"
    const carts = await database.cart.findMany({
      where: {
        id: {
          in: cartItems.map((item) => item.cart_id),
        },
        status: "ISSUED_ORDER",
      },
    });

    // Get all orders that are linked to these carts and have status "DELIVERED"
    const orders = await database.order.findMany({
      where: {
        cartId: {
          in: carts.map((cart) => cart.id),
        },
        orderStatus: "DELIVERED",
      },
    });

    // Get all users that are linked to these orders
    const users = await database.user.findMany({
      where: {
        id: {
          in: orders.map((order) => order.id),
        },
      },
    });

    return users;
  }
  async mostSimiliarProducts(productId: string) {
    const usersThatHaveBoughtProduct = await this.getUsersThatHaveBoughtProduct(
      productId
    );

    const relatedItems = await database.cartItem.groupBy({
      by: ["product_id"],
      where: {
        AND: [
          { product_id: { not: productId } },
          {
            cart: {
              user_id: {
                in: usersThatHaveBoughtProduct.map((user) => user.id),
              },
            },
          },
        ],
      },
      _count: true,
      orderBy: { _count: { product_id: "desc" } },
      take: 10,
    });

    return relatedItems;
  }
  async getFilterOptions(req: Request, res: Response) {
    const productInfo = await database.product.aggregate({
      _min: {
        price: true,
        publishing_date: true,
        page_number: true,
      },
      _max: {
        price: true,
        publishing_date: true,
        page_number: true,
      },
    });
    const genres = await database.genre.findMany();
    const publishers = await database.publisher.findMany();
    res.json({ productInfo, genres, publishers });
  }
  async createProduct(req: Request, res: Response) {
    const {
      title,
      description,
      price,
      quantity,
      publishing_date,
      genre,
      author,
      publisher,
      page_number,
      productType,
    } = req.body;
    await database.product.create({
      data: {
        title,
        page_number,
        author: {
          connect: {
            id: author,
          },
        },
        publisher: {
          connect: {
            id: publisher,
          },
        },
        productType: {
          connect: {
            id: productType,
          },
        },

        description,
        price,
        quantity,
        publishing_date: new Date(publishing_date),
      },
    });
  }
}
export default ProductService;

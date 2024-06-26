import { Request, Response } from "express";
import database from "../Database/database.js";
class ReviewService {
  async checkUserReviewEligibility(user: string, productId: string) {
    const reviewed = await database.review.findFirst({
      where: {
        product: {
          id: productId,
        },
        user: {
          id: user,
        },
      },
    });
    if (reviewed) return false;
    const hasBoughtProduct = await database.order.findFirst({
      where: {
        orderStatus: "DELIVERED",
        cart: {
          user: {
            id: user,
          },
          cartItems: {
            some: {
              product: {
                id: productId,
              },
            },
          },
        },
      },
    });
    if (hasBoughtProduct) return true;
    return false;
  }
  async addReview(req: Request, res: Response) {
    const { product_id, rating, comment } = req.body;
    if (!(await this.checkUserReviewEligibility(req.user!, product_id)))
      res
        .status(400)
        .json({ error: "You're not eligible to review this product" })
        .send();
    const review = await database.review.create({
      data: {
        product_id: product_id,
        rating,
        comment,
        user_id: req.user!,
      },
    });
    res.json(review).send();
  }
  async getReviewsByProduct(req: Request, res: Response) {
    const { page, limit } = req.query;
    const { id } = req.params;
    let pageDefault = 0;
    let limitDefault = 15;
    if (page) {
      pageDefault = page as unknown as number;
    }
    if (limit) {
      limitDefault = limit as unknown as number;
    }
    try {
      const skip = pageDefault * limitDefault;
      const reviews = await database.review.findMany({
        skip,
        take: limitDefault,
        where: {
          product_id: id,
        },
        include: {
          user: {
            select: {
              name: true,
              last_name: true,
            },
          },
        },
      });
      const count = await this.getReviewCount(id);
      const hasNextPage = count - skip - limitDefault;
      res.status(200).json({
        reviews: reviews,
        hasNextPage: hasNextPage > 0,
      });
    } catch (error) {
      res.status(400).send();
    }
  }
  private async getReviewCount(product_id: string) {
    try {
      const reviewCount = await database.review.count({
        where: {
          product_id: product_id,
        },
      });
      return reviewCount;
    } catch (error) {
      throw new Error("Such product doesn't exist");
    }
  }
}
export default ReviewService;

import { NextFunction } from "express";
import database from "../Database/database.js";
type ProductReview = {
  comment: string;
  rating: number;
  productId: number;
};
class ReviewService {
  async checkUserReviewEligibility(user: number, product_id: number) {
    const reviewed = await database.review.findFirst({
      where: {
        product: {
          id: product_id,
        },
        user: {
          id: user,
        },
      },
    });
    if (reviewed) return false;
    const hasBoughtProduct = await database.order.findFirst({
      where: {
        order_status: "DELIVERED",
        cart: {
          user: {
            id: user,
          },
          cartItems: {
            some: {
              product: {
                id: product_id,
              },
            },
          },
        },
      },
    });
    if (hasBoughtProduct) return true;
    return false;
  }
  async addReview(req: Request, res: Response, next: NextFunction) {}
}
export default ReviewService;

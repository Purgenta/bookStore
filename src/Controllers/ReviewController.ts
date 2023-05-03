import { Router } from "express";
import express from "express";
import Controller from "../Core/Controller.js";
import ReviewService from "../Services/ReviewService.js";
import ReviewValidation from "../Validation/ReviewValidation.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class ReviewController extends Controller {
  private reviewService: ReviewService;
  constructor() {
    super();
    this.reviewService = new ReviewService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.get("/reviewsByProduct/:id", this.getProductReviews());
    router.use(authenticatedMiddleWare);
    router.post("/addReview", ...this.addReview());
    return router;
  }
  private getProductReviews() {
    return this.reviewService.getReviewsByProduct.bind(this.reviewService);
  }
  private addReview() {
    const reviewValidation = new ReviewValidation()
      .setComment()
      .setRating()
      .getValidation();
    return [
      reviewValidation,
      this.mapErrors,
      this.reviewService.addReview.bind(this.reviewService),
    ];
  }
}
export default ReviewController;

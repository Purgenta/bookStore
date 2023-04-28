import { Router } from "express";
import express from "express";
import Controller from "../Core/Controller.js";
import ReviewService from "../Services/ReviewService.js";
import { authenticatedOrAnonymous } from "../Middlewares/AuthenticationMiddleware.js";
class ReviewController extends Controller {
  private reviewService: ReviewService;
  constructor() {
    super();
    this.reviewService = new ReviewService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.get("/reviewsByProduct/:id", this.getProductReviews());
    router.post("/addReview:id");
    return router;
  }
  private getProductReviews() {
    return this.reviewService.getReviewsByProduct.bind(this.reviewService);
  }
  private addReview() {
    return this.reviewService.addReview.bind(this.reviewService);
  }
}
export default ReviewController;

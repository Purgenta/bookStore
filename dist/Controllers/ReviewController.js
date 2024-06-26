import express from "express";
import Controller from "../Core/Controller.js";
import ReviewService from "../Services/ReviewService.js";
import ReviewValidation from "../Validation/ReviewValidation.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class ReviewController extends Controller {
    constructor() {
        super();
        this.reviewService = new ReviewService();
    }
    setRouter() {
        const router = express.Router();
        router.get("/reviewsByProduct/:id", this.getProductReviews());
        router.use(authenticatedMiddleWare);
        router.post("/addReview", ...this.addReview());
        return router;
    }
    getProductReviews() {
        return this.reviewService.getReviewsByProduct.bind(this.reviewService);
    }
    addReview() {
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
//# sourceMappingURL=ReviewController.js.map
import Controller from "../Core/Controller.js";
import express from "express";
import OrderService from "../Services/OrderService.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class OrderController extends Controller {
    constructor() {
        super();
        this.orderService = new OrderService();
    }
    setRouter() {
        const router = express.Router();
        router.use(authenticatedMiddleWare);
        router.post("/addReview", this.addOrderReview());
        return router;
    }
    addOrderReview() {
        return this.orderService.addOrderReview.bind(this.orderService);
    }
}
export default OrderController;
//# sourceMappingURL=OrderController.js.map
import { Router } from "express";
import Controller from "../Core/Controller.js";
import express from "express";
import OrderService from "../Services/OrderService.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class OrderController extends Controller {
  private orderService: OrderService;
  constructor() {
    super();
    this.orderService = new OrderService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.use(authenticatedMiddleWare);
    router.post("/addReview", this.addOrderReview());
    return router;
  }
  private addOrderReview() {
    return this.orderService.addOrderReview.bind(this.orderService);
  }
}
export default OrderController;

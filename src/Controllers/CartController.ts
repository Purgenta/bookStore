import { Router } from "express";
import express from "express";
import Controller from "../Core/Controller.js";
import CartService from "../Services/CartService.js";
import CartValidation from "../Validation/CartValidation.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";

class CartController extends Controller {
  private cartService: CartService;
  constructor() {
    super();
    this.cartService = new CartService();
  }
  setRouter(): Router {
    const router = express.Router();
    const cartItemValidation = new CartValidation()
      .setProductId()
      .setQuantity()
      .getValidation();
    router.use(authenticatedMiddleWare);
    router.post("/addCartItem", cartItemValidation, this.addCartItem());
    return router;
  }
  private addCartItem() {
    return this.cartService.addCartItem.bind(this.cartService);
  }
}
export default CartController;

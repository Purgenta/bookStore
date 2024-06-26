import express from "express";
import Controller from "../Core/Controller.js";
import CartService from "../Services/CartService.js";
import CartValidation from "../Validation/CartValidation.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class CartController extends Controller {
    constructor() {
        super();
        this.cartService = new CartService();
    }
    setRouter() {
        const router = express.Router();
        router.use(authenticatedMiddleWare);
        router.get("/cartItems", this.getCartItems());
        router.post("/addCartItem", ...this.addCartItem());
        router.post("/setCartItem", ...this.setCartItem());
        router.post("/deleteCartItem", ...this.deleteCartItem());
        router.post("/checkout", this.checkout());
        return router;
    }
    addCartItem() {
        const cartItemValidation = new CartValidation()
            .setProductId()
            .setQuantity()
            .getValidation();
        return [
            cartItemValidation,
            this.cartService.addCartItem.bind(this.cartService),
        ];
    }
    getCartItems() {
        return this.cartService.getUserCart.bind(this.cartService);
    }
    deleteCartItem() {
        const cartValidation = new CartValidation().setProductId().getValidation();
        return [
            cartValidation,
            this.cartService.deleteCartItem.bind(this.cartService),
        ];
    }
    setCartItem() {
        const cartValidation = new CartValidation()
            .setProductId()
            .setQuantity()
            .getValidation();
        return [
            cartValidation,
            this.cartService.setCartItem.bind(this.cartService),
        ];
    }
    checkout() {
        return this.cartService.checkout.bind(this.cartService);
    }
}
export default CartController;
//# sourceMappingURL=CartController.js.map
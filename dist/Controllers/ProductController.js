import Controller from "../Core/Controller.js";
import ProductService from "../Services/ProductService.js";
import express from "express";
class ProductController extends Controller {
    constructor() {
        super();
        this.productService = new ProductService();
    }
    setRouter() {
        const router = express.Router();
        router.get("/getFilteredProducts", this.getFilteredProducts());
        return router;
    }
    getFilteredProducts() {
        return this.productService.getQueriedProducts;
    }
    getProductById() {
        return this.productService.getProductById;
    }
}
export default ProductController;
//# sourceMappingURL=ProductController.js.map
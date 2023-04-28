import Controller from "../Core/Controller.js";
import ProductService from "../Services/ProductService.js";
import { authenticatedOrAnonymous } from "../Middlewares/AuthenticationMiddleware.js";
import { Router } from "express";
import express from "express";
class ProductController extends Controller {
  private productService: ProductService;
  constructor() {
    super();
    this.productService = new ProductService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.get("/filteredProducts", this.getFilteredProducts());
    router.get("/showcasedProducts", this.getShowcasedProducts());
    router.get("/:id", authenticatedOrAnonymous, this.getProductById());
    return router;
  }
  private getFilteredProducts() {
    return this.productService.getFilteredProducts.bind(this.productService);
  }
  private getProductById() {
    return this.productService.getProductById.bind(this.productService);
  }
  private getShowcasedProducts() {
    return this.productService.getShowcasedProducts.bind(this.productService);
  }
}
export default ProductController;

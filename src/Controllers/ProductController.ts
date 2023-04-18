import Controller from "../Core/Controller.js";
import ProductService from "../Services/ProductService.js";
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
    router.get("/getFilteredProducts", this.getFilteredProducts());
    return router;
  }
  private getFilteredProducts() {
    return this.productService.getQueriedProducts;
  }
  private getProductById() {
    return this.productService.getProductById;
  }
}
export default ProductController;

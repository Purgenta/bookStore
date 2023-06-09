import Controller from "../Core/Controller.js";
import ProductService from "../Services/ProductService.js";
import { authenticatedOrAnonymous } from "../Middlewares/AuthenticationMiddleware.js";
import { Router } from "express";
import express from "express";
import GenreService from "../Services/GenreService.js";
class ProductController extends Controller {
  private productService: ProductService;
  private genreService: GenreService;
  constructor() {
    super();
    this.productService = new ProductService();
    this.genreService = new GenreService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.get("/filterOptions", this.getFilterOptions());
    router.post("/filteredProducts", this.getFilteredProducts());
    router.get("/showcasedProducts", this.getShowcasedProducts());
    router.get("/genres", this.getGenres());
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
  private getFilterOptions() {
    return this.productService.getFilterOptions.bind(this.productService);
  }
  private getGenres() {
    return this.genreService.getAllGenres.bind(this.genreService);
  }
}
export default ProductController;

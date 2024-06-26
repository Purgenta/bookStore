import Controller from "../Core/Controller.js";
import ProductService from "../Services/ProductService.js";
import { authenticatedOrAnonymous } from "../Middlewares/AuthenticationMiddleware.js";
import express from "express";
import GenreService from "../Services/GenreService.js";
class ProductController extends Controller {
    constructor() {
        super();
        this.productService = new ProductService();
        this.genreService = new GenreService();
    }
    setRouter() {
        const router = express.Router();
        router.get("/filterOptions", this.getFilterOptions());
        router.post("/filteredProducts", this.getFilteredProducts());
        router.get("/showcasedProducts", this.getShowcasedProducts());
        router.get("/genres", this.getGenres());
        router.get("/:id", authenticatedOrAnonymous, this.getProductById());
        return router;
    }
    getFilteredProducts() {
        return this.productService.getFilteredProducts.bind(this.productService);
    }
    getProductById() {
        return this.productService.getProductById.bind(this.productService);
    }
    getShowcasedProducts() {
        return this.productService.getShowcasedProducts.bind(this.productService);
    }
    getFilterOptions() {
        return this.productService.getFilterOptions.bind(this.productService);
    }
    getGenres() {
        return this.genreService.getAllGenres.bind(this.genreService);
    }
}
export default ProductController;
//# sourceMappingURL=ProductController.js.map
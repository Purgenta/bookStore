import express from "express";
import AuthController from "./Controllers/AuthController.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import ProductController from "./Controllers/ProductController.js";
import UserController from "./Controllers/UserController.js";
import CartController from "./Controllers/CartController.js";
import ReviewController from "./Controllers/ReviewController.js";
import OrderController from "./Controllers/OrderController.js";
import { GenreController } from "./Controllers/GenreController.js";
class App {
    constructor() {
        this.app = express();
        this.authController = new AuthController();
        this.genreController = new GenreController();
        this.productController = new ProductController();
        this.orderController = new OrderController();
        this.userController = new UserController();
        this.cartController = new CartController();
        this.reviewController = new ReviewController();
    }
    run() {
        this.app.use(express.json());
        this.app.use(cors({
            credentials: true,
            origin: [
                "http://127.0.0.1:5173",
                "http://127.0.0.1:4173",
                "http://localhost:5173",
                "http://localhost:4173",
            ],
        }));
        this.app.use(cookieParser());
        this.app.use("/account", this.authController.setRouter());
        this.app.use("/product", this.productController.setRouter());
        this.app.use("/user", this.userController.setRouter());
        this.app.use("/cart", this.cartController.setRouter());
        this.app.use("/review", this.reviewController.setRouter());
        this.app.use("/order", this.orderController.setRouter());
        this.app.use("/genre", this.genreController.setRouter());
        this.app.use("/", (req, res) => {
            res.status(404).send();
        });
    }
    startServer() {
        this.run();
        this.app.listen(3000);
    }
}
const app = new App();
app.startServer();
//# sourceMappingURL=app.js.map
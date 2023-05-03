import express from "express";
import AuthController from "./Controllers/AuthController.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import ProductController from "./Controllers/ProductController.js";
class App {
    constructor() {
        this.app = express();
        this.authController = new AuthController();
        this.productController = new ProductController();
    }
    run() {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
        this.app.use("/account", this.authController.setRouter());
        this.app.use("/product", this.productController.setRouter());
        this.app.use("/", (req, res, next) => {
            console.log(`path not found`);
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
import express from "express";
import AuthController from "./Controllers/AuthController.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import ProductController from "./Controllers/ProductController.js";
import UserController from "./Controllers/UserController.js";
class App {
  private app: express.Application;
  private authController: AuthController;
  private productController: ProductController;
  private userController: UserController;
  constructor() {
    this.app = express();
    this.authController = new AuthController();
    this.productController = new ProductController();
    this.userController = new UserController();
  }
  run() {
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
    this.app.use("/account", this.authController.setRouter());
    this.app.use("/product", this.productController.setRouter());
    this.app.use("/user", this.userController.setRouter());
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

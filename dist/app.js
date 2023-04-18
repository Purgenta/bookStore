import express from "express";
import AuthController from "./Controllers/AuthController.js";
import cookieParser from "cookie-parser";
import cors from "cors";
class App {
    constructor() {
        this.app = express();
    }
    run() {
        const authController = new AuthController();
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(cors());
        this.app.use("/account", authController.setRouter());
        this.app.use("/", (req, res, next) => {
            res.status(404).send();
        });
    }
    startServer() {
        this.run();
        this.app.listen(3000);
        console.log("Running the server on port 3000");
    }
}
const app = new App();
app.startServer();
//# sourceMappingURL=app.js.map
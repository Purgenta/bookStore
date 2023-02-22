import express from "express";
import UserController from "./Controllers/UserController.js";
import router from "./Controllers/SomeExportedBs.js";
class App {
  private app: express.Application;
  constructor() {
    this.app = express();
  }
  run(): void {
    const userController = new UserController();
    this.app.use(express.json());
    this.app.use("/base", router);
    this.app.use("/account", userController.setRouter);
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

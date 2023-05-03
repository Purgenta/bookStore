import { Router } from "express";
import express from "express";
import Controller from "../Core/Controller.js";
import UserService from "../Services/UserService.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";

class UserController extends Controller {
  private userService: UserService;
  constructor() {
    super();
    this.userService = new UserService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.use(authenticatedMiddleWare);
    router.get("/favourites", this.getUserFavourites());
    router.post("/removeFavourite", this.removeFavourite());
    router.post("/addFavourite", this.addFavourite());
    return router;
  }
  private getUserFavourites() {
    return this.userService.getUserFavourites.bind(this.userService);
  }
  private removeFavourite() {
    return this.userService.removeFavourite.bind(this.userService);
  }
  private addFavourite() {
    return this.userService.addFavourite.bind(this.userService);
  }
}
export default UserController;

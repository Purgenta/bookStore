import { Router } from "express";
import Controller from "../Core/Controller.js";

class UserController extends Controller {
  setRouter(): Router {
    throw new Error("Method not implemented.");
  }
  private async getUserFavourites() {}
}
export default UserController;

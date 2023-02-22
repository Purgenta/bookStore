import Controller from "../Core/Controller.js";
import express from "express";
import userValidation from "../Validation/UserValidation.js";
import UserService from "../Services/UserService.js";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction, Router } from "express";
class UserController extends Controller {
  setRouter(): Router {
    const router = express.Router();
    router.use("/", (req: Request, res: Response, next: NextFunction) => {
      res.send("30005");
    });
    router.post(
      "/register",
      userValidation,
      async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(400).json({ errors: errors.array() });
        } else {
          const userService = new UserService(req, res);
          const { email, name, lastName, password } = req.body;
          userService.register({ email, name, lastName, password });
        }
      }
    );
    return router;
  }
}
export default UserController;

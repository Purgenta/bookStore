import Controller from "../Core/Controller.js";
import express from "express";
import UserService from "../Services/UserService.js";
import { refreshTokenMiddleware } from "../Middlewares/AuthenticationMiddleware.js";
import {
  validateUserDetails,
  validateUserLogin,
} from "../Validation/UserValidation.js";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction, Router } from "express";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class UserController extends Controller {
  setRouter(): Router {
    const router = express.Router();
    router.route("/register").post(validateUserDetails, this.register());
    router
      .route("/protectedRoute")
      .get(authenticatedMiddleWare, this.someProtectedData);
    router
      .route("/refreshToken")
      .get(refreshTokenMiddleware, this.refreshToken);
    router.route("/login").post(validateUserLogin, this.login());
    return router;
  }
  private register(): (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void {
    return (req: Request, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        res.status(400).json({ errors: errors.array() });
      }
      const userService = new UserService(req, res);
      const { email, name, lastName, password } = req.body;
      userService.register({ email, name, lastName, password });
    };
  }
  private login(): (req: Request, res: Response) => void {
    return (req: Request, res: Response) => {
      const userService = new UserService(req, res);
      const { email, password } = req.body;
      userService.login({ email, password });
    };
  }
  private someProtectedData(req: Request, res: Response) {
    res.status(200).json({
      greet: "Hello from a secure endpoint",
      user: req.user,
    });
  }
  private refreshToken(req: Request, res: Response) {
    const userService = new UserService(req, res);
    userService.issueRefreshToken(req, res);
  }
}
export default UserController;

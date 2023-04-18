import Controller from "../Core/Controller.js";
import express from "express";
import AuthService from "../Services/AuthService.js";
import { refreshTokenMiddleware } from "../Middlewares/AuthenticationMiddleware.js";
import { UserValidation } from "../Validation/UserValidation.js";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction, Router } from "express";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class AuthController extends Controller {
  private authService: AuthService;
  constructor() {
    super();
    this.authService = new AuthService();
  }
  setRouter(): Router {
    const router = express.Router();
    const validateUserDetails = new UserValidation()
      .setEmail()
      .setPassword()
      .setName()
      .setLastName()
      .getValidation();
    const validateUserLogin = new UserValidation()
      .setEmail()
      .setPassword()
      .getValidation();
    router.route("/register").post(validateUserDetails, this.register());
    router.route("/refreshToken").get(refreshTokenMiddleware, this.accessToken);
    router.route("/login").post(validateUserLogin, this.login());
    return router;
  }
  private register(): (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void {
    return (req: Request, res: Response, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        res.status(400).json({ errors: errors.array() });
      }
      const { email, name, lastName, password, phoneNumber } = req.body;
      this.authService.register(req, res, next, {
        email,
        name,
        lastName,
        password,
        phoneNumber,
      });
    };
  }
  private login() {
    return (req: Request, res: Response, next: NextFunction) => {
      const { email, password } = req.body;
      this.authService.login(req, res, next, { email, password });
    };
  }
  private accessToken(req: Request, res: Response) {
    this.authService.issueAccessToken(req, res);
  }
}
export default AuthController;

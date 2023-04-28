import Controller from "../Core/Controller.js";
import express from "express";
import AuthService from "../Services/AuthService.js";
import authenticatedMiddleWare, {
  refreshTokenMiddleware,
} from "../Middlewares/AuthenticationMiddleware.js";
import { UserValidation } from "../Validation/UserValidation.js";
import { Router } from "express";
class AuthController extends Controller {
  private authService: AuthService;
  constructor() {
    super();
    this.authService = new AuthService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.get("/protectedRoute", authenticatedMiddleWare, (req, res) =>
      res.send({
        greet: "Hi",
        user: req.user,
      })
    );
    router.route("/register").post(...this.register());
    router.route("/refreshToken").get(...this.accessToken());
    router.route("/login").post(...this.login());
    return router;
  }
  private register() {
    const validateUserDetails = new UserValidation()
      .setEmail()
      .setPassword()
      .setName()
      .setLastName()
      .setNumber()
      .getValidation();
    return [
      validateUserDetails,
      this.mapErrors,
      this.authService.register.bind(this.authService),
    ];
  }
  private login() {
    const validateUserLogin = new UserValidation()
      .setEmail()
      .setPassword()
      .getValidation();
    return [
      validateUserLogin,
      this.mapErrors,
      this.authService.login.bind(this.authService),
    ];
  }
  private accessToken() {
    return [
      refreshTokenMiddleware,
      this.authService.issueAccessToken.bind(this.authService),
    ];
  }
}
export default AuthController;

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
    router.route("/register").post(...this.register());
    router.route("/refreshToken").get(...this.accessToken());
    router.route("/login").post(...this.login());
    router.use(authenticatedMiddleWare);
    router.route("/updateInformation").put(...this.updateInformation());
    router.route("/updateCredentials").put(...this.updateCredentials());
    router.route("/logout").get(this.logout());
    return router;
  }
  private register() {
    const validateUserDetails = new UserValidation()
      .setEmail()
      .setPassword("password")
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
      .setPassword("password")
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
  private updateInformation() {
    const validateInformation = new UserValidation()
      .setEmail()
      .setName()
      .setLastName()
      .setNumber()
      .getValidation();
    return [
      validateInformation,
      this.mapErrors,
      this.authService.changeUserInformation.bind(this.authService),
    ];
  }
  private updateCredentials() {
    const validateCredentials = new UserValidation()
      .setPassword("currentPassword")
      .setPassword("newPassword")
      .getValidation();
    return [
      validateCredentials,
      this.mapErrors,
      this.authService.updateCredentials.bind(this.authService),
    ];
  }
  private logout() {
    return this.authService.logout.bind(this.authService);
  }
}
export default AuthController;

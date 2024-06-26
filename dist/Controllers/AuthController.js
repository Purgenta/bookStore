import Controller from "../Core/Controller.js";
import express from "express";
import AuthService from "../Services/AuthService.js";
import authenticatedMiddleWare, { refreshTokenMiddleware, } from "../Middlewares/AuthenticationMiddleware.js";
import { UserValidation } from "../Validation/UserValidation.js";
class AuthController extends Controller {
    constructor() {
        super();
        this.authService = new AuthService();
    }
    setRouter() {
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
    register() {
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
    login() {
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
    accessToken() {
        return [
            refreshTokenMiddleware,
            this.authService.issueAccessToken.bind(this.authService),
        ];
    }
    updateInformation() {
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
    updateCredentials() {
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
    logout() {
        return this.authService.logout.bind(this.authService);
    }
}
export default AuthController;
//# sourceMappingURL=AuthController.js.map
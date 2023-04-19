import Controller from "../Core/Controller.js";
import express from "express";
import AuthService from "../Services/AuthService.js";
import { refreshTokenMiddleware } from "../Middlewares/AuthenticationMiddleware.js";
import { UserValidation } from "../Validation/UserValidation.js";
import { validationResult } from "express-validator";
class AuthController extends Controller {
    constructor() {
        super();
        this.authService = new AuthService();
    }
    setRouter() {
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
    register() {
        return (req, res, next) => {
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
    login() {
        return (req, res, next) => {
            const { email, password } = req.body;
            this.authService.login(req, res, next, { email, password });
        };
    }
    accessToken(req, res) {
        this.authService.issueAccessToken(req, res);
    }
}
export default AuthController;
//# sourceMappingURL=AuthController.js.map
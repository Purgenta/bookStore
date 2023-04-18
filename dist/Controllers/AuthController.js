import Controller from "../Core/Controller.js";
import express from "express";
import AuthService from "../Services/AuthService.js";
import { refreshTokenMiddleware } from "../Middlewares/AuthenticationMiddleware.js";
import { validateUserDetails, validateUserLogin, } from "../Validation/UserValidation.js";
import { validationResult } from "express-validator";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class UserController extends Controller {
    setRouter() {
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
    register() {
        return (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty) {
                res.status(400).json({ errors: errors.array() });
            }
            const authService = new AuthService(req, res);
            const { email, name, lastName, password } = req.body;
            authService.register({ email, name, lastName, password });
        };
    }
    login() {
        return (req, res) => {
            const authService = new AuthService(req, res);
            const { email, password } = req.body;
            authService.login({ email, password });
        };
    }
    someProtectedData(req, res) {
        res.status(200).json({
            greet: "Hello from a secure endpoint",
            user: req.user,
        });
    }
    refreshToken(req, res) {
        const authService = new AuthService(req, res);
        authService.issueRefreshToken(req, res);
    }
}
export default UserController;
//# sourceMappingURL=AuthController.js.map
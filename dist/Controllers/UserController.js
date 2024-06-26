import express from "express";
import Controller from "../Core/Controller.js";
import UserService from "../Services/UserService.js";
import authenticatedMiddleWare from "../Middlewares/AuthenticationMiddleware.js";
class UserController extends Controller {
    constructor() {
        super();
        this.userService = new UserService();
    }
    setRouter() {
        const router = express.Router();
        router.use(authenticatedMiddleWare);
        router.get("/favourites", this.getUserFavourites());
        router.post("/removeFavourite", this.removeFavourite());
        router.post("/addFavourite", this.addFavourite());
        router.get("/profile", this.getUserProfile());
        router.get("/orders", this.getUserOrders());
        router.post("/prefferences", this.setPrefferences());
        return router;
    }
    getUserFavourites() {
        return this.userService.getUserFavourites.bind(this.userService);
    }
    getUserProfile() {
        return this.userService.getUserProfile.bind(this.userService);
    }
    removeFavourite() {
        return this.userService.removeFavourite.bind(this.userService);
    }
    addFavourite() {
        return this.userService.addFavourite.bind(this.userService);
    }
    getUserOrders() {
        return this.userService.getUserOrders.bind(this.userService);
    }
    setPrefferences() {
        return this.userService.setPrefferences.bind(this.userService);
    }
}
export default UserController;
//# sourceMappingURL=UserController.js.map
import Controller from "../Core/Controller.js";
import GenreService from "../Services/GenreService.js";
import express from "express";
export class GenreController extends Controller {
    constructor() {
        super();
        this.genreService = new GenreService();
    }
    setRouter() {
        const router = express.Router();
        router.get("/getAllGenres", this.getAllGenres());
        router.post("/createGenre", this.createGenre());
        return router;
    }
    getAllGenres() {
        return this.genreService.getAllGenres.bind(this.genreService);
    }
    createGenre() {
        return this.genreService.createGenre.bind(this.genreService);
    }
}
//# sourceMappingURL=GenreController.js.map
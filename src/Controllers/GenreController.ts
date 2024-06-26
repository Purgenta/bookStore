import { Router } from "express";
import Controller from "../Core/Controller.js";
import GenreService from "../Services/GenreService.js";
import express from "express";
export class GenreController extends Controller {
  private genreService: GenreService;
  constructor() {
    super();
    this.genreService = new GenreService();
  }
  setRouter(): Router {
    const router = express.Router();
    router.get("/getAllGenres", this.getAllGenres());
    router.post("/createGenre", this.createGenre());
    return router;
  }
  private getAllGenres() {
    return this.genreService.getAllGenres.bind(this.genreService);
  }
  private createGenre() {
    return this.genreService.createGenre.bind(this.genreService);
  }
}

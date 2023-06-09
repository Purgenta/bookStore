import { Request, Response } from "express";
import database from "../Database/database.js";

class GenreService {
  public async getAllGenres(req: Request, res: Response) {
    const genres = await database.genre.findMany();
    res.json(genres);
  }
}
export default GenreService;

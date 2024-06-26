import { Request, Response } from "express";
import database from "../Database/database.js";

class GenreService {
  public async getAllGenres(req: Request, res: Response) {
    const genres = await database.genre.findMany();
    res.json(genres);
  }
  public async createGenre(req: Request, res: Response) {
    const { name } = req.body;
    await database.genre.create({
      data: { name },
    });
    res.status(201).send();
  }
}
export default GenreService;

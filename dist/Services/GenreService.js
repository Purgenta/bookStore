import database from "../Database/database.js";
class GenreService {
    async getAllGenres(req, res) {
        const genres = await database.genre.findMany();
        res.json(genres);
    }
    async createGenre(req, res) {
        const { name } = req.body;
        await database.genre.create({
            data: { name },
        });
        res.status(201).send();
    }
}
export default GenreService;
//# sourceMappingURL=GenreService.js.map
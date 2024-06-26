import database from "../Database/database.js";
class GenreService {
    async getAllGenres(req, res) {
        const genres = await database.genre.findMany();
        res.json(genres);
    }
}
export default GenreService;
//# sourceMappingURL=GenreService.js.map
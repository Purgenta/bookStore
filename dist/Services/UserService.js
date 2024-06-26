import database from "../Database/database.js";
import { plainToClass } from "class-transformer";
import { ProductDTO } from "../Models/ProductDTO.js";
class UserService {
    async checkIfUserExists(email) {
        const user = await database.user.findUnique({
            where: {
                email: email,
            },
        });
        if (user)
            return true;
        return false;
    }
    async getUserProfile(req, res) {
        const user = req.user;
        const userProfile = await database.user.findUnique({
            where: {
                id: user,
            },
            include: {
                preferences: {
                    select: {
                        genre: true,
                    },
                },
                cart: {
                    select: { orders: { where: { orderStatus: "DELIVERED" } } },
                    where: {
                        status: "ISSUED_ORDER",
                    },
                },
            },
        });
        return res.json(userProfile);
    }
    async addFavourite(req, res) {
        const user = req.user;
        const { productId } = req.body;
        try {
            const favouriteCount = await database.favourites.count({
                where: {
                    user_id: user,
                },
            });
            if (favouriteCount >= 10)
                res
                    .status(400)
                    .send({ error: "You can have up to 10 favourite products" });
            await database.favourites.create({
                data: {
                    product_id: productId,
                    user_id: user,
                },
            });
            await this.getUserFavourites(req, res);
        }
        catch (error) {
            res.status(400).send();
        }
    }
    async setPrefferences(req, res) {
        const { genreId } = req.body;
        const genre = await database.genre.findFirst({ where: { id: genreId } });
        if (!genre)
            return res.status(400).send();
        const userPref = await database.userPreferences.findFirst({
            where: { user_id: req.user },
        });
        if (userPref) {
            await database.userPreferences.update({
                where: {
                    id: userPref.id,
                },
                data: { genre_id: genreId },
            });
        }
        else {
            await database.userPreferences.create({
                data: {
                    user_id: req.user,
                    genre_id: genreId,
                },
            });
        }
        return res.status(201).send();
    }
    async removeFavourite(req, res) {
        const user = req.user;
        const { productId } = req.body;
        try {
            await database.favourites.deleteMany({
                where: {
                    product_id: productId,
                    user_id: user,
                },
            });
            await this.getUserFavourites(req, res);
        }
        catch (error) {
            res.status(400).send();
        }
    }
    async getUserFavourites(req, res) {
        const { user } = req;
        const favourites = await database.product.findMany({
            where: {
                favourites: {
                    some: {
                        user_id: {
                            equals: user,
                        },
                    },
                },
            },
        });
        res.json(plainToClass(ProductDTO, favourites, { excludeExtraneousValues: true }));
    }
    async getUserOrders(req, res) {
        const { user } = req;
        const orders = await database.order.findMany({
            where: {
                cart: {
                    user_id: user,
                },
            },
            select: {
                orderStatus: true,
                orderedAt: true,
                id: true,
                orderReview: true,
                cart: {
                    select: {
                        cartItems: {
                            select: { product: true },
                        },
                    },
                },
            },
        });
        res.json(orders);
    }
}
export default UserService;
//# sourceMappingURL=UserService.js.map
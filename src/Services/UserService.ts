import database from "../Database/database.js";
import { plainToClass } from "class-transformer";
import { ProductDTO } from "../Models/ProductDTO.js";
import { Request, Response } from "express";
class UserService {
  async checkIfUserExists(email: string): Promise<boolean> {
    const user = await database.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) return true;
    return false;
  }
  async getUserProfile(req: Request, res: Response) {
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
  async addFavourite(req: Request, res: Response) {
    const user = req.user!;
    const { product_id } = req.body;
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
          product_id: product_id,
          user_id: user,
        },
      });
      await this.getUserFavourites(req, res);
    } catch (error) {
      res.status(400).send();
    }
  }
  async setPrefferences(req: Request, res: Response) {
    const { genre_id } = req.body;
    const genre = await database.genre.findFirst({ where: { id: genre_id } });
    if (!genre) return res.status(400).send();
    const userPref = await database.userPreferences.findFirst({
      where: { user_id: req.user },
    });
    if (userPref) {
      await database.userPreferences.update({
        where: {
          id: userPref.id,
        },
        data: {
          genre_id: genre_id,
        },
      });
    } else {
      await database.userPreferences.create({
        data: {
          genre: {
            connect: {
              id: genre_id,
              name: genre.name,
            },
          },
          user: {
            connect: {
              id: req.user,
            },
          },
        },
      });
    }
    return res.status(201).send();
  }
  async removeFavourite(req: Request, res: Response) {
    const user = req.user;
    const { product_id } = req.body;
    try {
      await database.favourites.deleteMany({
        where: {
          product_id: product_id,
          user_id: user,
        },
      });
      await this.getUserFavourites(req, res);
    } catch (error) {
      res.status(400).send();
    }
  }
  async getUserFavourites(req: Request, res: Response) {
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
    res.json(
      plainToClass(ProductDTO, favourites, { excludeExtraneousValues: true })
    );
  }
  async getUserOrders(req: Request, res: Response) {
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

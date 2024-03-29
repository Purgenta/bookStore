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
    const { productId } = req.body;
    try {
      const favouriteCount = await database.favourites.count({
        where: {
          userId: user,
        },
      });
      if (favouriteCount >= 10)
        res
          .status(400)
          .send({ error: "You can have up to 10 favourite products" });
      await database.favourites.create({
        data: {
          productId: productId,
          userId: user,
        },
      });
      await this.getUserFavourites(req, res);
    } catch (error) {
      res.status(400).send();
    }
  }
  async setPrefferences(req: Request, res: Response) {
    const { genreId } = req.body;
    const genre = await database.genre.findFirst({ where: { id: genreId } });
    if (!genre) return res.status(400).send();
    const userPref = await database.userPreferences.findFirst({
      where: { userId: req.user },
    });
    if (userPref) {
      await database.userPreferences.update({
        where: {
          id: userPref.id,
        },
        data: { genreId },
      });
    } else {
      await database.userPreferences.create({
        data: {
          userId: req.user!,
          genreId,
        },
      });
    }
    return res.status(201).send();
  }
  async removeFavourite(req: Request, res: Response) {
    const user = req.user;
    const { productId } = req.body;
    try {
      await database.favourites.deleteMany({
        where: {
          productId,
          userId: user,
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
            userId: {
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
          userId: user,
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

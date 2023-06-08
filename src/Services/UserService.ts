import database from "../Database/database.js";
import { plainToClass } from "class-transformer";
import { ProductDTO } from "../Models/ProductDTO.js";
import { Request, Response } from "express";
class UserService {
  async checkIfUserExists(email: string): Promise<boolean> {
    const user = await database.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) return true;
    return false;
  }
  async getUserProfile(req: Request, res: Response) {
    const user = req.user as number;
    const userProfile = await database.user.findUnique({
      where: {
        id: user,
      },
      include: {
        cart: {
          select: { order: { where: { order_status: "DELIVERED" } } },
          where: {
            status: "ISSUED_ORDER",
          },
        },
      },
    });
    return res.json(userProfile);
  }
  async addFavourite(req: Request, res: Response) {
    const user = req.user as number;
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
          product_id: product_id as number,
          user_id: user,
        },
      });
      await this.getUserFavourites(req, res);
    } catch (error) {
      res.status(400).send();
    }
  }
  async removeFavourite(req: Request, res: Response) {
    const user = req.user as number;
    const { product_id } = req.body;
    try {
      await database.favourites.deleteMany({
        where: {
          product_id,
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
        order_status: true,
        ordered_at: true,
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

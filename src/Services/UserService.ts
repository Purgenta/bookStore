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
  async getUserFavourites(req: Request, res: Response) {
    const { user } = req;
    const favourites = await database.favourites.findMany({
      select: {
        product: true,
      },
      where: {
        user_id: user,
      },
    });
    res.json(
      plainToClass(ProductDTO, favourites, { excludeExtraneousValues: true })
    );
  }
}
export default UserService;

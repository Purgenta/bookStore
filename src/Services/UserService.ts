import database from "../Database/database.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import dotenv from "dotenv";
import Service from "../Core/Service.js";
dotenv.config();
export type UserDetails = {
  email: string;
  name: string;
  lastName: string;
  password: string;
};
export type UserLogin = Omit<UserDetails, "name" | "lastName">;
export type JwtPayload = {
  user_id: number;
};
class UserService extends Service {
  public async register(userDetails: UserDetails) {
    const userExists = await this.checkIfUserExists(userDetails.email);
    if (userExists) {
      this.response
        .status(400)
        .json({ error: "A user with the same email already exists" });
      return;
    }
    const hashedPassword = await bcryptjs.hash(userDetails.password, 12);
    userDetails.password = hashedPassword;
    await database.user.create({
      data: {
        ...userDetails,
      },
    });
    this.response.status(201).send();
  }
  private async checkIfUserExists(email: string): Promise<boolean> {
    const user = await database.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) return true;
    return false;
  }
  public async login(userLogin: UserLogin) {
    const user = await database.user.findFirst({
      where: {
        email: userLogin.email,
      },
      select: {
        role: true,
        id: true,
        email: true,
        password: true,
      },
    });
    if (!user) {
      this.response.status(400).send();
      return;
    }
    const validPassword = await bcryptjs.compare(
      userLogin.password,
      user.password
    );
    if (!validPassword) {
      this.response.status(400).send();
      return;
    }
    const accessToken = jwt.sign(
      { user_id: user.id },
      `${process.env.ACCESS_TOKEN_SECRET_KEY}`,
      {
        expiresIn: "15min",
      }
    );
    const refreshToken = jwt.sign(
      { user_id: user.id },
      `${process.env.REFRESH_TOKEN_SECRET_KEY}`,
      {
        expiresIn: "1d",
      }
    );
    await database.refreshToken.create({
      data: {
        refreshToken,
        user_id: user.id,
      },
    });
    this.response.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    this.response.status(200).json({ accessToken });
  }
  public async issueRefreshToken(req: Request, res: Response) {
    const user_id = req.user as number;
    const accessToken = jwt.sign(
      { user_id },
      `${process.env.ACCESS_TOKEN_SECRET_KEY}`,
      {
        expiresIn: "15min",
      }
    );
    res.status(200).send({ accessToken });
  }
}
export default UserService;

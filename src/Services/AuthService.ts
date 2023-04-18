import database from "../Database/database.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { Role } from "@prisma/client";
import UserService from "./UserService.js";
dotenv.config();
export type UserDetails = {
  email: string;
  name: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};
export type UserLogin = Omit<UserDetails, "name" | "lastName" | "phoneNumber">;
export type JwtPayload = {
  user_id: number;
  role: Role;
};
class AuthService {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction,
    userDetails: UserDetails
  ) {
    const userExists = await UserService.checkIfUserExists(userDetails.email);
    if (userExists) {
      res.status(400).json({
        errors: {
          email: {
            msg: "A user with the said adress already exists",
          },
        },
      });
      return;
    }
    const hashedPassword = await bcryptjs.hash(userDetails.password, 12);
    userDetails.password = hashedPassword;
    await database.user.create({
      data: {
        ...userDetails,
      },
    });
    res.status(201).send();
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
  public async login(
    req: Request,
    res: Response,
    next: NextFunction,
    userLogin: UserLogin
  ) {
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
      res.status(400).send();
      return;
    }
    const validPassword = await bcryptjs.compare(
      userLogin.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).send();
      return;
    }
    const accessToken = jwt.sign(
      { user_id: user.id, role: user.role },
      `${process.env.ACCESS_TOKEN_SECRET_KEY}`,
      {
        expiresIn: "10s",
      }
    );
    const refreshToken = jwt.sign(
      { user_id: user.id, role: user.role },
      `${process.env.REFRESH_TOKEN_SECRET_KEY}`,
      {
        expiresIn: "15min",
      }
    );
    await database.refreshToken.create({
      data: {
        refreshToken,
        user_id: user.id,
      },
    });
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({ accessToken, role: user.role });
  }
  public async issueAccessToken(req: Request, res: Response) {
    const user_id = req.user as number;
    const accessToken = jwt.sign(
      { user_id },
      `${process.env.ACCESS_TOKEN_SECRET_KEY}`,
      {
        expiresIn: "1min",
      }
    );
    res.status(200).send({ accessToken, role: req.role });
  }
}
export default AuthService;

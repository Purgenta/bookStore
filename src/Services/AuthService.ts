import database from "../Database/database.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { Role } from "@prisma/client";
import UserService from "./UserService.js";
dotenv.config();
type UserDetails = {
  email: string;
  name: string;
  last_name: string;
  password: string;
  phone_number: string;
};
export type UserLogin = Omit<
  UserDetails,
  "name" | "last_name" | "phone_number"
>;
export type JwtPayload = {
  user_id: number;
  role: Role;
};
class AuthService {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  public async register(req: Request, res: Response, next: NextFunction) {
    const userDetails = req.body as UserDetails;
    const userExists = await this.userService.checkIfUserExists(
      userDetails.email
    );
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
  public async login(req: Request, res: Response, next: NextFunction) {
    const userLogin: UserLogin = req.body;
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
        expiresIn: "20min",
      }
    );
    const refresh_token = jwt.sign(
      { user_id: user.id, role: user.role },
      `${process.env.REFRESH_TOKEN_SECRET_KEY}`,
      {
        expiresIn: "1day",
      }
    );
    await database.refreshToken.create({
      data: {
        refresh_token,
        user_id: user.id,
      },
    });
    res.cookie("refresh_token", refresh_token, {
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
        expiresIn: "20min",
      }
    );
    res.status(200).send({ accessToken, role: req.role });
  }
}
export default AuthService;

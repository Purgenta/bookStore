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
  adress: string;
};
export type UserLogin = Omit<
  UserDetails,
  "name" | "last_name" | "phone_number" | "adress"
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
  public async logout(req: Request, res: Response) {
    res.cookie("refresh_token", "", {
      httpOnly: true,
      maxAge: 0,
      sameSite: "none",
      secure: true,
    });
  }
  public async changeUserInformation(req: Request, res: Response) {
    const { name, last_name, phone_number, email, adress } = req.body;
    const { user } = req;
    const foundUser = await database.user.findFirst({ where: { id: user } });
    if (!foundUser) return res.status(500).send();
    if (foundUser.email === email) {
      await database.user.update({
        where: {
          id: user,
        },
        data: {
          adress,
          name,
          last_name,
          phone_number,
        },
      });
    } else {
      const userWithSameEmail = await database.user.findFirst({
        where: { email },
      });
      if (userWithSameEmail) return res.status(400).send();
      await database.user.update({
        where: {
          id: user,
        },
        data: {
          email,
          name,
          last_name,
          phone_number,
        },
      });
    }
    return res.status(200).send();
  }
  public async updateCredentials(req: Request, res: Response) {
    const { currentPassword, newPassword } = req.body;
    const user = await database.user.findFirst({ where: { id: req.user } });
    if (!user) return res.status(500).send();
    const validPassword = await bcryptjs.compare(
      currentPassword,
      user.password
    );
    if (!validPassword) {
      res.status(400).send();
      return;
    }
    const passwordHash = await bcryptjs.hash(newPassword, 12);
    await database.user.update({
      where: { id: req.user },
      data: {
        password: passwordHash,
      },
    });
    res.status(200).send();
  }
}
export default AuthService;

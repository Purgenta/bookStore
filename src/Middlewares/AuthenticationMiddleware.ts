import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import database from "../Database/database.js";
import { JwtPayload } from "../Services/AuthService.js";
dotenv.config();
const authenticatedMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req?.headers?.authorization;
  if (!authHeader) return res.status(401).send();
  const accessToken = authHeader.slice(7);
  jwt.verify(
    accessToken,
    `${process.env.ACCESS_TOKEN_SECRET_KEY}`,
    (err, decoded) => {
      if (err) return res.status(401).send();
      let user = decoded as JwtPayload;
      req.user = user.user_id;
      req.role = user.role;
      next();
    }
  );
};
export const refreshTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cookies = req.cookies;
  if (!cookies[`refresh_token`]) {
    return res.status(401).send();
  }
  jwt.verify(
    cookies[`refresh_token`] as string,
    process.env.REFRESH_TOKEN_SECRET_KEY as string,
    async (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).send();
      }
      let refreshToken = decoded as JwtPayload;
      const foundRefreshToken = await database.refreshToken.findFirst({
        where: {
          user_id: refreshToken.user_id,
          refreshToken: cookies[`refresh_token`],
        },
        include: { user: true },
      });
      if (!foundRefreshToken) {
        return res.status(401).send();
      }
      if (
        foundRefreshToken?.refreshToken !== (cookies[`refresh_token`] as string)
      ) {
        return res.status(401).send();
      }
      req.user = foundRefreshToken.user_id;
      req.role = foundRefreshToken.user.role;
      next();
    }
  );
};
export default authenticatedMiddleWare;

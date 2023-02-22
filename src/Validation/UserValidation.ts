import { body } from "express-validator";
import { NextFunction, Request, Response } from "express";
export default (req: Request, res: Response, next: NextFunction) => {
  console.log("running");
  body("email").isEmail().normalizeEmail(),
    body("password").isAlphanumeric().isLength({ min: 5, max: 16 }).trim(),
    body("firstName").isAlpha().trim();
  next();
};

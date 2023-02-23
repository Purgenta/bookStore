import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
const validateUserDetails = [
  body("email").isEmail().trim(),
  body("password").isAlphanumeric().isLength({ min: 5, max: 16 }).trim(),
  body("name").isAlpha().trim(),
  body("lastName").isAlpha().trim().isLength({ min: 3 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.mapped() });
      return;
    }
    next();
  },
];
const validateUserLogin = [
  body("email").isEmail().trim(),
  body("password").isAlphanumeric().isLength({ min: 5, max: 16 }).trim(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.mapped() });
      return;
    }
    next();
  },
];

export { validateUserDetails, validateUserLogin };

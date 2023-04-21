import { NextFunction, Router, Request, Response } from "express";
import { validationResult } from "express-validator";
abstract class Controller {
  abstract setRouter(): Router;
  mapErrors(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      res.status(400).json({ errors: errors.array() }).send();
    }
    next();
  }
}
export default Controller;

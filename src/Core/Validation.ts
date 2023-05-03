import { ValidationChain, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";
abstract class Validation {
  protected chain: (
    | ValidationChain
    | ((req: Request, res: Response, next: NextFunction) => void)
  )[] = [];
  getValidation() {
    this.chain.push((req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.mapped() });
        return;
      }
      next();
    });
    return this.chain;
  }
}
export default Validation;

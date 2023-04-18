import { ValidationChain, body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
class UserValidation {
  private chain: (
    | ValidationChain
    | ((req: Request, res: Response, next: NextFunction) => void)
  )[] = [];
  setEmail() {
    this.chain.push(body("email").isEmail().trim());
    return this;
  }
  setPassword() {
    this.chain.push(
      body("password").isAlphanumeric().isLength({ min: 5, max: 16 }).trim()
    );
    return this;
  }
  setName() {
    this.chain.push(body("name").isAlpha().trim().isLength({ min: 3 }));
    return this;
  }
  setLastName() {
    this.chain.push(body("lastName").isAlpha().trim().isLength({ min: 3 }));
    return this;
  }
  setNumber() {
    this.chain.push(body("phoneNumber").isNumeric().isLength({ min: 9 }));
    return this;
  }
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
export { UserValidation };

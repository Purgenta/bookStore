import { body } from "express-validator";
import Validation from "../Core/Validation.js";
class UserValidation extends Validation {
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
    this.chain.push(body("last_name").isAlpha().trim().isLength({ min: 3 }));
    return this;
  }
  setNumber() {
    this.chain.push(
      body("phone_number").isNumeric().isLength({ min: 8, max: 20 })
    );
    return this;
  }
}
export { UserValidation };

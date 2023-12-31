import { body } from "express-validator";
import Validation from "../Core/Validation.js";

class CartValidation extends Validation {
  setProductId() {
    this.chain.push(body("product_id").isString());
    return this;
  }
  setQuantity() {
    this.chain.push(body("quantity").isInt({ min: 1 }));
    return this;
  }
}
export default CartValidation;

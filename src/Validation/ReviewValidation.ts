import { body } from "express-validator";
import Validation from "../Core/Validation.js";

class ReviewValidation extends Validation {
  setComment() {
    this.chain.push(
      body("comment").trim().isString().isLength({ min: 15, max: 300 })
    );
    return this;
  }
  setRating() {
    this.chain.push(
      body("rating")
        .trim()
        .isNumeric()
        .isInt()
        .custom((value) => {
          if (value >= 1 && value <= 5) return true;
          else
            throw new Error(
              "A rating must be between 1 and 5, integer values only."
            );
        })
    );
    return this;
  }
}
export default ReviewValidation;

import { body, validationResult } from "express-validator";
class UserValidation {
    constructor() {
        this.chain = [];
    }
    setEmail() {
        this.chain.push(body("email").isEmail().trim());
        return this;
    }
    setPassword() {
        this.chain.push(body("password").isAlphanumeric().isLength({ min: 5, max: 16 }).trim());
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
        this.chain.push((req, res, next) => {
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
//# sourceMappingURL=UserValidation.js.map
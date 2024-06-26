import { validationResult } from "express-validator";
class Validation {
    constructor() {
        this.chain = [];
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
export default Validation;
//# sourceMappingURL=Validation.js.map
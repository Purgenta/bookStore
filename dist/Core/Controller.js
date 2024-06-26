import { validationResult } from "express-validator";
class Controller {
    mapErrors(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            res.status(400).json({ errors: errors.array() }).send();
        }
        next();
    }
}
export default Controller;
//# sourceMappingURL=Controller.js.map
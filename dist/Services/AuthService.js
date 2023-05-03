import database from "../Database/database.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserService from "./UserService.js";
dotenv.config();
class AuthService {
    async register(req, res, next, userDetails) {
        const userExists = await UserService.checkIfUserExists(userDetails.email);
        if (userExists) {
            res.status(400).json({
                errors: {
                    email: {
                        msg: "A user with the said adress already exists",
                    },
                },
            });
            return;
        }
        const hashedPassword = await bcryptjs.hash(userDetails.password, 12);
        userDetails.password = hashedPassword;
        await database.user.create({
            data: {
                ...userDetails,
            },
        });
        res.status(201).send();
    }
    async checkIfUserExists(email) {
        const user = await database.user.findFirst({
            where: {
                email: email,
            },
        });
        if (user)
            return true;
        return false;
    }
    async login(req, res, next, userLogin) {
        const user = await database.user.findFirst({
            where: {
                email: userLogin.email,
            },
            select: {
                role: true,
                id: true,
                email: true,
                password: true,
            },
        });
        if (!user) {
            res.status(400).send();
            return;
        }
        const validPassword = await bcryptjs.compare(userLogin.password, user.password);
        if (!validPassword) {
            res.status(400).send();
            return;
        }
        const accessToken = jwt.sign({ user_id: user.id, role: user.role }, `${process.env.ACCESS_TOKEN_SECRET_KEY}`, {
            expiresIn: "10s",
        });
        const refreshToken = jwt.sign({ user_id: user.id, role: user.role }, `${process.env.REFRESH_TOKEN_SECRET_KEY}`, {
            expiresIn: "15min",
        });
        await database.refreshToken.create({
            data: {
                refreshToken,
                user_id: user.id,
            },
        });
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "none",
            secure: true,
        });
        res.status(200).json({ accessToken, role: user.role });
    }
    async issueAccessToken(req, res) {
        const user_id = req.user;
        const accessToken = jwt.sign({ user_id }, `${process.env.ACCESS_TOKEN_SECRET_KEY}`, {
            expiresIn: "1min",
        });
        res.status(200).send({ accessToken, role: req.role });
    }
}
export default AuthService;
//# sourceMappingURL=AuthService.js.map
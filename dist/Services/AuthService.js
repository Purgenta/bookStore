import database from "../Database/database.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserService from "./UserService.js";
dotenv.config();
class AuthService {
    constructor() {
        this.userService = new UserService();
    }
    async register(req, res, next) {
        const { adress, email, last_name, name, password, phone_number } = req.body;
        const userExists = await this.userService.checkIfUserExists(email);
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
        const hashedPassword = await bcryptjs.hash(password, 12);
        await database.user.create({
            data: {
                password: hashedPassword,
                email: email,
                last_name,
                name,
                phone_number,
                address: adress,
            },
        });
        res.status(201).send();
    }
    async login(req, res, next) {
        const userLogin = req.body;
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
            expiresIn: "20min",
        });
        const refresh_token = jwt.sign({ user_id: user.id, role: user.role }, `${process.env.REFRESH_TOKEN_SECRET_KEY}`, {
            expiresIn: "1day",
        });
        await database.refreshToken.create({
            data: {
                refresh_token,
                user_id: user.id,
            },
        });
        res.cookie("refresh_token", refresh_token, {
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
            expiresIn: "20min",
        });
        res.status(200).send({ accessToken, role: req.role });
    }
    async logout(req, res) {
        res.cookie("refresh_token", "", {
            httpOnly: true,
            maxAge: 0,
            sameSite: "none",
            secure: true,
        });
    }
    async changeUserInformation(req, res) {
        const { name, last_name, phone_number, email, adress } = req.body;
        const { user } = req;
        const foundUser = await database.user.findFirst({ where: { id: user } });
        if (!foundUser)
            return res.status(500).send();
        if (foundUser.email === email) {
            await database.user.update({
                where: {
                    id: user,
                },
                data: {
                    address: adress,
                    name,
                    last_name: last_name,
                    phone_number: phone_number,
                },
            });
        }
        else {
            const userWithSameEmail = await database.user.findFirst({
                where: { email },
            });
            if (userWithSameEmail)
                return res.status(400).send();
            await database.user.update({
                where: {
                    id: user,
                },
                data: {
                    email,
                    name,
                    last_name: last_name,
                    phone_number: phone_number,
                },
            });
        }
        return res.status(200).send();
    }
    async updateCredentials(req, res) {
        const { currentPassword, newPassword } = req.body;
        const user = await database.user.findFirst({ where: { id: req.user } });
        if (!user)
            return res.status(500).send();
        const validPassword = await bcryptjs.compare(currentPassword, user.password);
        if (!validPassword) {
            res.status(400).send();
            return;
        }
        const passwordHash = await bcryptjs.hash(newPassword, 12);
        await database.user.update({
            where: { id: req.user },
            data: {
                password: passwordHash,
            },
        });
        res.status(200).send();
    }
}
export default AuthService;
//# sourceMappingURL=AuthService.js.map
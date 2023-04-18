import database from "../Database/database.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Service from "../Core/Service.js";
dotenv.config();
class UserService extends Service {
    async register(userDetails) {
        const userExists = await this.checkIfUserExists(userDetails.email);
        if (userExists) {
            this.response.status(400).json({
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
        this.response.status(201).send();
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
    async login(userLogin) {
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
            this.response.status(400).send();
            return;
        }
        const validPassword = await bcryptjs.compare(userLogin.password, user.password);
        if (!validPassword) {
            this.response.status(400).send();
            return;
        }
        const accessToken = jwt.sign({ user_id: user.id, role: user.role }, `${process.env.ACCESS_TOKEN_SECRET_KEY}`, {
            expiresIn: "15min",
        });
        const refreshToken = jwt.sign({ user_id: user.id, role: user.role }, `${process.env.REFRESH_TOKEN_SECRET_KEY}`, {
            expiresIn: "1d",
        });
        await database.refreshToken.create({
            data: {
                refreshToken,
                user_id: user.id,
            },
        });
        this.response.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        this.response.status(200).json({ accessToken, role: user.role });
    }
    async issueRefreshToken(req, res) {
        const user_id = req.user;
        const accessToken = jwt.sign({ user_id }, `${process.env.ACCESS_TOKEN_SECRET_KEY}`, {
            expiresIn: "15min",
        });
        res.status(200).send({ accessToken });
    }
}
export default UserService;
//# sourceMappingURL=AuthService.js.map
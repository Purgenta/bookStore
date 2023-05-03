import database from "../Database/database.js";
class UserService {
    static async checkIfUserExists(email) {
        const user = await database.user.findFirst({
            where: {
                email: email,
            },
        });
        if (user)
            return true;
        return false;
    }
}
export default UserService;
//# sourceMappingURL=UserService.js.map
import database from "../Database/database.js";
import bcryptjs from "bcryptjs";
import Service from "../Core/Service.js";
export type UserDetails = {
  email: string;
  name: string;
  lastName: string;
  password: string;
};
class UserService extends Service {
  public async register(userDetails: UserDetails) {
    const userExists = await this.checkIfUserExists(userDetails.email);
    if (userExists) {
      this.response
        .status(400)
        .json({ error: "A user with the same email already exists" });
    }
    const hashedPassword = await bcryptjs.hash(userDetails.password, 12);
    userDetails.password = hashedPassword;
    const user = await database.user.create({
      data: {
        ...userDetails,
      },
    });
  }
  private async checkIfUserExists(email: string): Promise<boolean> {
    const user = await database.user.findUnique({
      where: {
        email,
      },
    });
    if (user) return true;
    return false;
  }
}
export default UserService;

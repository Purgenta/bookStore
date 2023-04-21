import database from "../Database/database.js";
class UserService {
  async checkIfUserExists(email: string): Promise<boolean> {
    const user = await database.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) return true;
    return false;
  }
  async getUserFavourites(user: number) {
    const favourites = await database.favourites.findMany({
      where: {
        user_id: user,
      },
    });
  }
}
export default UserService;

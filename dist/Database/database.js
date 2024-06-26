import { PrismaClient } from "@prisma/client";
let database;
if (!global.__database) {
    const prisma = new PrismaClient();
    global.__database = prisma;
}
database = global.__database;
export default database;
//# sourceMappingURL=database.js.map
import { PrismaClient } from "@prisma/client";
let database;
if (!global.__database) {
    global.__database = new PrismaClient({
        log: ["query", "info", "warn", "error"],
    });
}
database = global.__database;
export default database;
//# sourceMappingURL=database.js.map
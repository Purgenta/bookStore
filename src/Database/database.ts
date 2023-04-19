import { PrismaClient } from "@prisma/client";
let database: PrismaClient;
declare global {
  var __database: PrismaClient | undefined;
}
if (!global.__database) {
  const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
  global.__database = prisma;
}
database = global.__database;
export default database;

export {};
declare global {
  namespace Express {
    export interface Request {
      user?: number;
      role?: "USER" | "ADMIN";
    }
  }
}

import express from "express";
const router = express.Router();
router.use("/", (req, res, next) => {
  res.send("5000");
});
export default router;

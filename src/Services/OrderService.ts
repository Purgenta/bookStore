import { Request, Response } from "express";
import database from "../Database/database.js";
class OrderService {
  public async addOrderReview(req: Request, res: Response) {
    const { order_id, comment, rating } = req.body;
    const order = await database.order.findFirst({
      where: { id: order_id, cart: { userId: req.user } },
    });
    if (!order) return res.status;
    const orderReview = await database.orderReview.findFirst({
      where: { order },
    });
    if (orderReview) return res.status(400).send();
    await database.orderReview.create({
      data: { orderId: order.id, rating, comment, userId: req.user! },
    });
    return res.status(201).send();
  }
}
export default OrderService;

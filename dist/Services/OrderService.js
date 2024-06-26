import database from "../Database/database.js";
class OrderService {
    async addOrderReview(req, res) {
        const { order_id, comment, rating } = req.body;
        const order = await database.order.findFirst({
            where: { id: order_id, cart: { user_id: req.user } },
        });
        if (!order)
            return res.status;
        const orderReview = await database.orderReview.findFirst({
            where: { order },
        });
        if (orderReview)
            return res.status(400).send();
        await database.orderReview.create({
            data: { order_id: order.id, rating, comment, user_id: req.user },
        });
        return res.status(201).send();
    }
}
export default OrderService;
//# sourceMappingURL=OrderService.js.map
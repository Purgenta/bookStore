import database from "../Database/database.js";
class ProductService {
    getQueriedProducts(req, res) {
        let { limit, page, priceLowerBound, priceUpperBound, publishedDateLowerBound, publishedDateHigherBound, } = req.query;
        let itemLimit = 15;
        if (limit)
            itemLimit = +limit;
        let skip = 0;
        if (page)
            skip = itemLimit * +page;
        try {
            const filter = {
                skip,
                take: itemLimit,
                where: {
                    price: {
                        gte: priceLowerBound,
                        lte: priceUpperBound,
                    },
                    publishingDate: {
                        gte: publishedDateLowerBound,
                        lte: publishedDateHigherBound,
                    },
                },
                orderBy: {
                    price: "desc",
                },
            };
            const products = database.product.findMany({});
            const numberOfItems = database.product.count;
            res
                .json({
                products,
                hasNextPage: true,
            })
                .send();
        }
        catch (error) {
            res.status(500).send();
        }
    }
    getProductById(req, res) {
        const { id } = req.params;
        try {
            const product = database.product.findFirstOrThrow({
                where: {
                    id: {
                        equals: id,
                    },
                },
            });
            res.send(product);
        }
        catch (error) {
            res.status(404).send();
        }
    }
}
export default ProductService;
//# sourceMappingURL=ProductService.js.map
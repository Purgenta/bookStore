import database from "../Database/database.js";
import { Request, Response, NextFunction } from "express";
class ProductService {
  getQueriedProducts(req: Request, res: Response) {
    let {
      limit,
      page,
      priceLowerBound,
      priceUpperBound,
      publishedDateLowerBound,
      publishedDateHigherBound,
    } = req.query;
    let itemLimit = 15;
    if (limit) itemLimit = +limit;
    let skip = 0;
    if (page) skip = itemLimit * +page;
    try {
      type Filter = Parameters<typeof database.product.findMany>; // [string, number]
      const filter: Filter[0] = {
        skip,
        take: itemLimit,
        where: {
          price: {
            gte: priceLowerBound as number | undefined,
            lte: priceUpperBound as number | undefined,
          },
          publishingDate: {
            gte: publishedDateLowerBound as string | undefined,
            lte: publishedDateHigherBound as string | undefined,
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
    } catch (error) {
      res.status(500).send();
    }
  }
  getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = database.product.findFirstOrThrow({
        where: {
          id: {
            equals: id as unknown as number,
          },
        },
      });
      res.send(product);
    } catch (error) {
      res.status(404).send();
    }
  }
}
export default ProductService;

import database from "../Database/database.js";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ProductDTO } from "../Models/ProductDTO.js";
class ProductService {
  async getQueriedProducts(req: Request, res: Response) {
    let {
      limit,
      page,
      priceLowerBound,
      priceUpperBound,
      publishedDateLowerBound,
      publishedDateHigherBound,
    } = req.query;
    let itemLimit = 15;
    if (limit) itemLimit = parseInt(limit as string);
    let skip = 0;
    if (page) skip = itemLimit * parseInt(page as string);
    try {
      type Filter = Parameters<typeof database.product.findMany>;
      const filter: Filter[0] = {
        skip,
        take: itemLimit,
        include: {
          publisher: true,
        },
        where: {
          price: {
            gte: priceLowerBound ? +priceLowerBound : undefined,
            lte: priceUpperBound ? +priceUpperBound : undefined,
          },
          publishing_date: {
            gte: publishedDateLowerBound as string | undefined,
            lte: publishedDateHigherBound as string | undefined,
          },
        },
        orderBy: {
          price: "desc",
        },
      };
      const products = await database.product.findMany(filter);
      const hasNextPage = await database.product.count();
      res
        .json({
          products: plainToClass(ProductDTO, products, {
            excludeExtraneousValues: true,
          }),
          hasNextPage,
        })
        .send();
    } catch (error) {
      res.status(500).send();
    }
  }
  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await database.product.findFirstOrThrow({
        where: {
          id: {
            equals: parseInt(id),
          },
        },
      });
      res.send(
        plainToClass(ProductDTO, product, { excludeExtraneousValues: true })
      );
    } catch (error) {
      res.status(404).send();
    }
  }
}
export default ProductService;

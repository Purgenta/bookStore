import { Request, Response } from "express";
import database from "../Database/database.js";
class CartService {
  public async getUserCart(req: Request, res: Response) {
    const cartItems = await database.product.findMany({
      select: {
        quantity: true,
        price: true,
        title: true,
        productImages: true,
        cartItem: {
          where: {
            cart: {
              status: "ONGOING",
              userId: req.user,
            },
          },
        },
        sale: true,
        id: true,
      },
      where: {
        cartItem: {
          some: {
            cart: {
              userId: req.user,
              status: "ONGOING",
            },
          },
        },
      },
    });
    res.json(cartItems);
  }
  private async createOrFindUserCart(user: string) {
    let userCart = await database.cart.findFirst({
      where: {
        status: "ONGOING",
        userId: user,
      },
    });
    if (!userCart) {
      userCart = await database.cart.create({
        data: {
          userId: user,
        },
      });
    }
    return userCart;
  }
  private async findCartItem(cartId: string, productId: string) {
    const cartItem = await database.cartItem.findFirst({
      where: {
        cartId,
        productId,
      },
    });
    return cartItem;
  }
  private async findProductWithQuantity(product_id: string, quantity: number) {
    const product = await database.product.findFirst({
      where: {
        id: product_id,
        isSelling: true,
        quantity: {
          gt: quantity,
        },
      },
    });
    return product;
  }
  private async createCartItem(
    cartId: string,
    productId: string,
    quantity: number
  ) {
    return await database.cartItem.create({
      data: {
        productId,
        cartId,
        quantity,
      },
    });
  }
  public async addCartItem(req: Request, res: Response) {
    const { product_id, quantity } = req.body;
    const user = req.user;
    const userCart = await this.createOrFindUserCart(user!);
    try {
      const product = await this.findProductWithQuantity(product_id, quantity);
      if (!product) throw new Error("No such product exists");
      const cartItem = await this.findCartItem(userCart.id, product.id);
      if (!cartItem) {
        await this.createCartItem(userCart.id, product.id, quantity);
        res.status(200).send();
        return;
      } else {
        if (cartItem.quantity + quantity > product.quantity) {
          throw new Error(
            `Quantity exceeded, current available quantity is ${product.quantity}`
          );
        }
        await database.cartItem.update({
          data: {
            quantity: cartItem.quantity + quantity,
          },
          where: {
            id: cartItem.id,
          },
        });
        res.status(200).send();
      }
    } catch (error: any) {
      if (error?.message) res.status(400).send(error.message);
      else res.status(400).send();
    }
  }
  public async deleteCartItem(req: Request, res: Response) {
    try {
      const { product_id } = req.body;
      const cartItem = await database.cartItem.findFirst({
        where: {
          cart: {
            status: "ONGOING",
            userId: req.user,
          },
          productId: product_id,
        },
      });
      if (!cartItem) throw new Error("Item isn't inside of your cart");
      if (cartItem) {
        await database.cartItem.delete({
          where: {
            id: cartItem.id,
          },
        });
      }
      res.status(200).send();
    } catch (error: any) {
      if (error?.message) res.status(400).send(error.message);
      else res.status(500).send();
    }
  }
  public async setCartItem(req: Request, res: Response) {
    const { productId, quantity } = req.body;
    const { user } = req;
    const product = await database.product.findUnique({
      where: { id: productId },
    });
    if (!product) return res.status(400).send();
    if (product.quantity >= quantity) {
      const userCart = await this.createOrFindUserCart(user!);
      const cartItem = await this.findCartItem(userCart.id, productId);
      if (!cartItem) {
        await database.cartItem.create({
          data: { quantity, productId, cartId: userCart.id },
        });
      } else
        await database.cartItem.update({
          data: { quantity },
          where: { id: cartItem.id },
        });
      return res.status(200).send();
    } else {
      return res.json({
        errors: { quantity: `Available quantity is ${product.quantity}` },
      });
    }
  }
  public async checkout(req: Request, res: Response) {
    const { user } = req;
    const cart = await database.cart.findFirst({
      where: { userId: user, status: "ONGOING" },
      select: { cartItems: true, id: true },
    });
    if (!cart || !cart.cartItems.length) res.status(400).send();
    else {
      await database.cart.update({
        where: { id: cart.id },
        data: { status: "ISSUED_ORDER" },
      });
      await database.order.create({
        data: { cartId: cart.id, orderStatus: "ONGOING" },
      });
      res.status(201).send();
    }
  }
}
export default CartService;

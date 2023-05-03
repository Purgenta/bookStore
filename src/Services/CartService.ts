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
        cartItem: true,
        sale: true,
        id: true,
      },
      where: {
        cartItem: {
          some: {
            cart: {
              user_id: req.user,
              status: "ONGOING",
            },
          },
        },
      },
    });
    res.json(cartItems);
  }
  private async createOrFindUserCart(user: number) {
    let userCart = await database.cart.findFirst({
      where: {
        status: "ONGOING",
        user_id: user,
      },
    });
    if (!userCart) {
      userCart = await database.cart.create({
        data: {
          user_id: user as number,
        },
      });
    }
    return userCart;
  }
  private async findCartItem(cart_id: number, product_id: number) {
    const cartItem = await database.cartItem.findFirst({
      where: {
        cart_id,
        product_id,
      },
    });
    return cartItem;
  }
  private async findProductWithQuantity(product_id: number, quantity: number) {
    const product = await database.product.findFirst({
      where: {
        id: product_id,
        is_selling: true,
        quantity: {
          gt: quantity,
        },
      },
    });
    return product;
  }
  private async createCartItem(
    cart_id: number,
    product_id: number,
    quantity: number
  ) {
    return await database.cartItem.create({
      data: {
        product_id,
        cart_id,
        quantity,
      },
    });
  }
  public async addCartItem(req: Request, res: Response) {
    const { product_id, quantity } = req.body;
    const user = req.user;
    const userCart = await this.createOrFindUserCart(user as number);
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
            user_id: req.user,
          },
          product_id: product_id as number,
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
}
export default CartService;

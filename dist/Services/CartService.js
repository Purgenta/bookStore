import database from "../Database/database.js";
class CartService {
    async getUserCart(req, res) {
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
                            user_id: req.user,
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
                            user_id: req.user,
                            status: "ONGOING",
                        },
                    },
                },
            },
        });
        res.json(cartItems);
    }
    async createOrFindUserCart(user) {
        let userCart = await database.cart.findFirst({
            where: {
                status: "ONGOING",
                user_id: user,
            },
        });
        if (!userCart) {
            userCart = await database.cart.create({
                data: {
                    user_id: user,
                },
            });
        }
        return userCart;
    }
    async findCartItem(cartId, productId) {
        const cartItem = await database.cartItem.findFirst({
            where: {
                cart_id: cartId,
                product_id: productId,
            },
        });
        return cartItem;
    }
    async findProductWithQuantity(product_id, quantity) {
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
    async createCartItem(cartId, productId, quantity) {
        return await database.cartItem.create({
            data: {
                product_id: productId,
                cart_id: cartId,
                quantity: quantity,
            },
        });
    }
    async addCartItem(req, res) {
        const { product_id, quantity } = req.body;
        const user = req.user;
        const userCart = await this.createOrFindUserCart(user);
        try {
            const product = await this.findProductWithQuantity(product_id, quantity);
            if (!product)
                throw new Error("No such product exists");
            const cartItem = await this.findCartItem(userCart.id, product.id);
            if (!cartItem) {
                await this.createCartItem(userCart.id, product.id, quantity);
                res.status(200).send();
                return;
            }
            else {
                if (cartItem.quantity + quantity > product.quantity) {
                    throw new Error(`Quantity exceeded, current available quantity is ${product.quantity}`);
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
        }
        catch (error) {
            if (error?.message)
                res.status(400).send(error.message);
            else
                res.status(400).send();
        }
    }
    async deleteCartItem(req, res) {
        try {
            const { product_id } = req.body;
            const cartItem = await database.cartItem.findFirst({
                where: {
                    cart: {
                        status: "ONGOING",
                        user_id: req.user,
                    },
                    product_id: product_id,
                },
            });
            if (!cartItem)
                throw new Error("Item isn't inside of your cart");
            if (cartItem) {
                await database.cartItem.delete({
                    where: {
                        id: cartItem.id,
                    },
                });
            }
            res.status(200).send();
        }
        catch (error) {
            if (error?.message)
                res.status(400).send(error.message);
            else
                res.status(500).send();
        }
    }
    async setCartItem(req, res) {
        const { productId, quantity } = req.body;
        const { user } = req;
        const product = await database.product.findUnique({
            where: { id: productId },
        });
        if (!product)
            return res.status(400).send();
        if (product.quantity >= quantity) {
            const userCart = await this.createOrFindUserCart(user);
            const cartItem = await this.findCartItem(userCart.id, productId);
            if (!cartItem) {
                await database.cartItem.create({
                    data: { quantity, product_id: productId, cart_id: userCart.id },
                });
            }
            else
                await database.cartItem.update({
                    data: { quantity },
                    where: { id: cartItem.id },
                });
            return res.status(200).send();
        }
        else {
            return res.json({
                errors: { quantity: `Available quantity is ${product.quantity}` },
            });
        }
    }
    async checkout(req, res) {
        const { user } = req;
        const cart = await database.cart.findFirst({
            where: { user_id: user, status: "ONGOING" },
            select: { cartItems: true, id: true },
        });
        if (!cart || !cart.cartItems.length)
            res.status(400).send();
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
//# sourceMappingURL=CartService.js.map
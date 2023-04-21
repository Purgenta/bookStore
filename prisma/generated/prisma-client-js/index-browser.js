
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  cart_id: 'cart_id',
  quantity: 'quantity'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  status: 'status'
};

exports.Prisma.GenreScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  order_status: 'order_status',
  ordered_at: 'ordered_at',
  cart_id: 'cart_id'
};

exports.Prisma.ProductGenreScalarFieldEnum = {
  product_id: 'product_id',
  genre_id: 'genre_id'
};

exports.Prisma.ProductImagesScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  image_url: 'image_url'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  page_number: 'page_number',
  title: 'title',
  publishing_date: 'publishing_date',
  is_selling: 'is_selling',
  price: 'price',
  type_id: 'type_id',
  quantity: 'quantity',
  publisher_id: 'publisher_id'
};

exports.Prisma.ProductTypeScalarFieldEnum = {
  id: 'id',
  type: 'type'
};

exports.Prisma.PublisherScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.RefreshTokenScalarFieldEnum = {
  id: 'id',
  refresh_token: 'refresh_token',
  user_id: 'user_id'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  comment: 'comment',
  rating: 'rating',
  user_id: 'user_id',
  product_id: 'product_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  last_name: 'last_name',
  phone_number: 'phone_number',
  createdAt: 'createdAt',
  password: 'password',
  role: 'role'
};
exports.CartStatus = {
  ONGOING: 'ONGOING',
  ISSUED_ORDER: 'ISSUED_ORDER'
};

exports.OrderStatus = {
  DELIVERED: 'DELIVERED',
  ONGOING: 'ONGOING',
  CANCELED: 'CANCELED'
};

exports.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
  User: 'User',
  Product: 'Product',
  Genre: 'Genre',
  ProductGenre: 'ProductGenre',
  Review: 'Review',
  Publisher: 'Publisher',
  Order: 'Order',
  ProductType: 'ProductType',
  Cart: 'Cart',
  CartItem: 'CartItem',
  RefreshToken: 'RefreshToken',
  ProductImages: 'ProductImages'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

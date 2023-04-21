
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  name: string
  last_name: string
  phone_number: string
  createdAt: Date
  password: string
  role: Role
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: number
  page_number: number
  title: string
  publishing_date: Date
  is_selling: boolean
  price: number
  type_id: number
  quantity: number
  publisher_id: number
}

/**
 * Model Genre
 * 
 */
export type Genre = {
  id: number
  name: string
}

/**
 * Model ProductGenre
 * 
 */
export type ProductGenre = {
  product_id: number
  genre_id: number
}

/**
 * Model Review
 * 
 */
export type Review = {
  id: number
  comment: string
  rating: number
  user_id: number
  product_id: number
}

/**
 * Model Publisher
 * 
 */
export type Publisher = {
  id: number
  name: string
}

/**
 * Model Order
 * 
 */
export type Order = {
  id: number
  order_status: OrderStatus
  ordered_at: Date
  cart_id: number
}

/**
 * Model ProductType
 * 
 */
export type ProductType = {
  id: number
  type: string
}

/**
 * Model Cart
 * 
 */
export type Cart = {
  id: number
  user_id: number
  status: CartStatus
}

/**
 * Model CartItem
 * 
 */
export type CartItem = {
  id: number
  product_id: number
  cart_id: number
  quantity: number
}

/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = {
  id: number
  refresh_token: string
  user_id: number
}

/**
 * Model ProductImages
 * 
 */
export type ProductImages = {
  id: number
  product_id: number
  image_url: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const CartStatus: {
  ONGOING: 'ONGOING',
  ISSUED_ORDER: 'ISSUED_ORDER'
};

export type CartStatus = (typeof CartStatus)[keyof typeof CartStatus]


export const OrderStatus: {
  DELIVERED: 'DELIVERED',
  ONGOING: 'ONGOING',
  CANCELED: 'CANCELED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<GlobalReject>;

  /**
   * `prisma.productGenre`: Exposes CRUD operations for the **ProductGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductGenres
    * const productGenres = await prisma.productGenre.findMany()
    * ```
    */
  get productGenre(): Prisma.ProductGenreDelegate<GlobalReject>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<GlobalReject>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **Publisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publishers
    * const publishers = await prisma.publisher.findMany()
    * ```
    */
  get publisher(): Prisma.PublisherDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.productType`: Exposes CRUD operations for the **ProductType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTypes
    * const productTypes = await prisma.productType.findMany()
    * ```
    */
  get productType(): Prisma.ProductTypeDelegate<GlobalReject>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<GlobalReject>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<GlobalReject>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<GlobalReject>;

  /**
   * `prisma.productImages`: Exposes CRUD operations for the **ProductImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImages.findMany()
    * ```
    */
  get productImages(): Prisma.ProductImagesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    refreshToken: number
    cart: number
    reviews: number
  }

  export type UserCountOutputTypeSelect = {
    refreshToken?: boolean
    cart?: boolean
    reviews?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    cartItem: number
    genre: number
    reviews: number
    productImages: number
  }

  export type ProductCountOutputTypeSelect = {
    cartItem?: boolean
    genre?: boolean
    reviews?: boolean
    productImages?: boolean
  }

  export type ProductCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductCountOutputTypeArgs)
    ? ProductCountOutputType 
    : S extends { select: any } & (ProductCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
      : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type GenreCountOutputType
   */


  export type GenreCountOutputType = {
    products: number
  }

  export type GenreCountOutputTypeSelect = {
    products?: boolean
  }

  export type GenreCountOutputTypeGetPayload<S extends boolean | null | undefined | GenreCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GenreCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GenreCountOutputTypeArgs)
    ? GenreCountOutputType 
    : S extends { select: any } & (GenreCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GenreCountOutputType ? GenreCountOutputType[P] : never
  } 
      : GenreCountOutputType




  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect | null
  }



  /**
   * Count Type PublisherCountOutputType
   */


  export type PublisherCountOutputType = {
    product: number
  }

  export type PublisherCountOutputTypeSelect = {
    product?: boolean
  }

  export type PublisherCountOutputTypeGetPayload<S extends boolean | null | undefined | PublisherCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PublisherCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PublisherCountOutputTypeArgs)
    ? PublisherCountOutputType 
    : S extends { select: any } & (PublisherCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PublisherCountOutputType ? PublisherCountOutputType[P] : never
  } 
      : PublisherCountOutputType




  // Custom InputTypes

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PublisherCountOutputType
     */
    select?: PublisherCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductTypeCountOutputType
   */


  export type ProductTypeCountOutputType = {
    product: number
  }

  export type ProductTypeCountOutputTypeSelect = {
    product?: boolean
  }

  export type ProductTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductTypeCountOutputTypeArgs)
    ? ProductTypeCountOutputType 
    : S extends { select: any } & (ProductTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductTypeCountOutputType ? ProductTypeCountOutputType[P] : never
  } 
      : ProductTypeCountOutputType




  // Custom InputTypes

  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductTypeCountOutputType
     */
    select?: ProductTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type CartCountOutputType
   */


  export type CartCountOutputType = {
    cartItems: number
    order: number
  }

  export type CartCountOutputTypeSelect = {
    cartItems?: boolean
    order?: boolean
  }

  export type CartCountOutputTypeGetPayload<S extends boolean | null | undefined | CartCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CartCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CartCountOutputTypeArgs)
    ? CartCountOutputType 
    : S extends { select: any } & (CartCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CartCountOutputType ? CartCountOutputType[P] : never
  } 
      : CartCountOutputType




  // Custom InputTypes

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    last_name: string | null
    phone_number: string | null
    createdAt: Date | null
    password: string | null
    role: Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    last_name: string | null
    phone_number: string | null
    createdAt: Date | null
    password: string | null
    role: Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    last_name: number
    phone_number: number
    createdAt: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    last_name?: true
    phone_number?: true
    createdAt?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    last_name?: true
    phone_number?: true
    createdAt?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    last_name?: true
    phone_number?: true
    createdAt?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt: Date
    password: string
    role: Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    last_name?: boolean
    phone_number?: boolean
    createdAt?: boolean
    password?: boolean
    role?: boolean
    refreshToken?: boolean | User$refreshTokenArgs
    cart?: boolean | User$cartArgs
    reviews?: boolean | User$reviewsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    refreshToken?: boolean | User$refreshTokenArgs
    cart?: boolean | User$cartArgs
    reviews?: boolean | User$reviewsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'refreshToken' ? Array < RefreshTokenGetPayload<S['include'][P]>>  :
        P extends 'cart' ? Array < CartGetPayload<S['include'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'refreshToken' ? Array < RefreshTokenGetPayload<S['select'][P]>>  :
        P extends 'cart' ? Array < CartGetPayload<S['select'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    refreshToken<T extends User$refreshTokenArgs= {}>(args?: Subset<T, User$refreshTokenArgs>): Prisma.PrismaPromise<Array<RefreshTokenGetPayload<T>>| Null>;

    cart<T extends User$cartArgs= {}>(args?: Subset<T, User$cartArgs>): Prisma.PrismaPromise<Array<CartGetPayload<T>>| Null>;

    reviews<T extends User$reviewsArgs= {}>(args?: Subset<T, User$reviewsArgs>): Prisma.PrismaPromise<Array<ReviewGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.refreshToken
   */
  export type User$refreshTokenArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    where?: RefreshTokenWhereInput
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }


  /**
   * User.cart
   */
  export type User$cartArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    where?: CartWhereInput
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * User.reviews
   */
  export type User$reviewsArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    where?: ReviewWhereInput
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    page_number: number | null
    price: number | null
    type_id: number | null
    quantity: number | null
    publisher_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    page_number: number | null
    price: number | null
    type_id: number | null
    quantity: number | null
    publisher_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    page_number: number | null
    title: string | null
    publishing_date: Date | null
    is_selling: boolean | null
    price: number | null
    type_id: number | null
    quantity: number | null
    publisher_id: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    page_number: number | null
    title: string | null
    publishing_date: Date | null
    is_selling: boolean | null
    price: number | null
    type_id: number | null
    quantity: number | null
    publisher_id: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    page_number: number
    title: number
    publishing_date: number
    is_selling: number
    price: number
    type_id: number
    quantity: number
    publisher_id: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    page_number?: true
    price?: true
    type_id?: true
    quantity?: true
    publisher_id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    page_number?: true
    price?: true
    type_id?: true
    quantity?: true
    publisher_id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    page_number?: true
    title?: true
    publishing_date?: true
    is_selling?: true
    price?: true
    type_id?: true
    quantity?: true
    publisher_id?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    page_number?: true
    title?: true
    publishing_date?: true
    is_selling?: true
    price?: true
    type_id?: true
    quantity?: true
    publisher_id?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    page_number?: true
    title?: true
    publishing_date?: true
    is_selling?: true
    price?: true
    type_id?: true
    quantity?: true
    publisher_id?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: number
    page_number: number
    title: string
    publishing_date: Date
    is_selling: boolean
    price: number
    type_id: number
    quantity: number
    publisher_id: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    page_number?: boolean
    title?: boolean
    publishing_date?: boolean
    is_selling?: boolean
    price?: boolean
    type_id?: boolean
    quantity?: boolean
    publisher_id?: boolean
    cartItem?: boolean | Product$cartItemArgs
    genre?: boolean | Product$genreArgs
    reviews?: boolean | Product$reviewsArgs
    productImages?: boolean | Product$productImagesArgs
    publisher?: boolean | PublisherArgs
    productType?: boolean | ProductTypeArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }


  export type ProductInclude = {
    cartItem?: boolean | Product$cartItemArgs
    genre?: boolean | Product$genreArgs
    reviews?: boolean | Product$reviewsArgs
    productImages?: boolean | Product$productImagesArgs
    publisher?: boolean | PublisherArgs
    productType?: boolean | ProductTypeArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cartItem' ? Array < CartItemGetPayload<S['include'][P]>>  :
        P extends 'genre' ? Array < ProductGenreGetPayload<S['include'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['include'][P]>>  :
        P extends 'productImages' ? Array < ProductImagesGetPayload<S['include'][P]>>  :
        P extends 'publisher' ? PublisherGetPayload<S['include'][P]> :
        P extends 'productType' ? ProductTypeGetPayload<S['include'][P]> :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cartItem' ? Array < CartItemGetPayload<S['select'][P]>>  :
        P extends 'genre' ? Array < ProductGenreGetPayload<S['select'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['select'][P]>>  :
        P extends 'productImages' ? Array < ProductImagesGetPayload<S['select'][P]>>  :
        P extends 'publisher' ? PublisherGetPayload<S['select'][P]> :
        P extends 'productType' ? ProductTypeGetPayload<S['select'][P]> :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cartItem<T extends Product$cartItemArgs= {}>(args?: Subset<T, Product$cartItemArgs>): Prisma.PrismaPromise<Array<CartItemGetPayload<T>>| Null>;

    genre<T extends Product$genreArgs= {}>(args?: Subset<T, Product$genreArgs>): Prisma.PrismaPromise<Array<ProductGenreGetPayload<T>>| Null>;

    reviews<T extends Product$reviewsArgs= {}>(args?: Subset<T, Product$reviewsArgs>): Prisma.PrismaPromise<Array<ReviewGetPayload<T>>| Null>;

    productImages<T extends Product$productImagesArgs= {}>(args?: Subset<T, Product$productImagesArgs>): Prisma.PrismaPromise<Array<ProductImagesGetPayload<T>>| Null>;

    publisher<T extends PublisherArgs= {}>(args?: Subset<T, PublisherArgs>): Prisma__PublisherClient<PublisherGetPayload<T> | Null>;

    productType<T extends ProductTypeArgs= {}>(args?: Subset<T, ProductTypeArgs>): Prisma__ProductTypeClient<ProductTypeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     */
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.cartItem
   */
  export type Product$cartItemArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * Product.genre
   */
  export type Product$genreArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    where?: ProductGenreWhereInput
    orderBy?: Enumerable<ProductGenreOrderByWithRelationInput>
    cursor?: ProductGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductGenreScalarFieldEnum>
  }


  /**
   * Product.reviews
   */
  export type Product$reviewsArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    where?: ReviewWhereInput
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Product.productImages
   */
  export type Product$productImagesArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    where?: ProductImagesWhereInput
    orderBy?: Enumerable<ProductImagesOrderByWithRelationInput>
    cursor?: ProductImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductImagesScalarFieldEnum>
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
  }



  /**
   * Model Genre
   */


  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs = {
    where?: GenreWhereInput
    orderBy?: Enumerable<GenreOrderByWithAggregationInput>
    by: GenreScalarFieldEnum[]
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }


  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect = {
    id?: boolean
    name?: boolean
    products?: boolean | Genre$productsArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }


  export type GenreInclude = {
    products?: boolean | Genre$productsArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }

  export type GenreGetPayload<S extends boolean | null | undefined | GenreArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Genre :
    S extends undefined ? never :
    S extends { include: any } & (GenreArgs | GenreFindManyArgs)
    ? Genre  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'products' ? Array < ProductGenreGetPayload<S['include'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GenreArgs | GenreFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'products' ? Array < ProductGenreGetPayload<S['select'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Genre ? Genre[P] : never
  } 
      : Genre


  type GenreCountArgs = 
    Omit<GenreFindManyArgs, 'select' | 'include'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find the first Genre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs>(
      args?: SelectSubset<T, GenreFindManyArgs>
    ): Prisma.PrismaPromise<Array<GenreGetPayload<T>>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs>(
      args: SelectSubset<T, GenreCreateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs>(
      args?: SelectSubset<T, GenreCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs>(
      args: SelectSubset<T, GenreDeleteArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs>(
      args: SelectSubset<T, GenreUpdateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs>(
      args?: SelectSubset<T, GenreDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs>(
      args: SelectSubset<T, GenreUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs>(
      args: SelectSubset<T, GenreUpsertArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GenreClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    products<T extends Genre$productsArgs= {}>(args?: Subset<T, Genre$productsArgs>): Prisma.PrismaPromise<Array<ProductGenreGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Genre base type for findUnique actions
   */
  export type GenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUnique
   */
  export interface GenreFindUniqueArgs extends GenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre base type for findFirst actions
   */
  export type GenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: Enumerable<GenreScalarFieldEnum>
  }

  /**
   * Genre findFirst
   */
  export interface GenreFindFirstArgs extends GenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs = {
    /**
     * The data used to create many Genres.
     */
    data: Enumerable<GenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre.products
   */
  export type Genre$productsArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    where?: ProductGenreWhereInput
    orderBy?: Enumerable<ProductGenreOrderByWithRelationInput>
    cursor?: ProductGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductGenreScalarFieldEnum>
  }


  /**
   * Genre without action
   */
  export type GenreArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
  }



  /**
   * Model ProductGenre
   */


  export type AggregateProductGenre = {
    _count: ProductGenreCountAggregateOutputType | null
    _avg: ProductGenreAvgAggregateOutputType | null
    _sum: ProductGenreSumAggregateOutputType | null
    _min: ProductGenreMinAggregateOutputType | null
    _max: ProductGenreMaxAggregateOutputType | null
  }

  export type ProductGenreAvgAggregateOutputType = {
    product_id: number | null
    genre_id: number | null
  }

  export type ProductGenreSumAggregateOutputType = {
    product_id: number | null
    genre_id: number | null
  }

  export type ProductGenreMinAggregateOutputType = {
    product_id: number | null
    genre_id: number | null
  }

  export type ProductGenreMaxAggregateOutputType = {
    product_id: number | null
    genre_id: number | null
  }

  export type ProductGenreCountAggregateOutputType = {
    product_id: number
    genre_id: number
    _all: number
  }


  export type ProductGenreAvgAggregateInputType = {
    product_id?: true
    genre_id?: true
  }

  export type ProductGenreSumAggregateInputType = {
    product_id?: true
    genre_id?: true
  }

  export type ProductGenreMinAggregateInputType = {
    product_id?: true
    genre_id?: true
  }

  export type ProductGenreMaxAggregateInputType = {
    product_id?: true
    genre_id?: true
  }

  export type ProductGenreCountAggregateInputType = {
    product_id?: true
    genre_id?: true
    _all?: true
  }

  export type ProductGenreAggregateArgs = {
    /**
     * Filter which ProductGenre to aggregate.
     */
    where?: ProductGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGenres to fetch.
     */
    orderBy?: Enumerable<ProductGenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductGenres
    **/
    _count?: true | ProductGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductGenreMaxAggregateInputType
  }

  export type GetProductGenreAggregateType<T extends ProductGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateProductGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductGenre[P]>
      : GetScalarType<T[P], AggregateProductGenre[P]>
  }




  export type ProductGenreGroupByArgs = {
    where?: ProductGenreWhereInput
    orderBy?: Enumerable<ProductGenreOrderByWithAggregationInput>
    by: ProductGenreScalarFieldEnum[]
    having?: ProductGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductGenreCountAggregateInputType | true
    _avg?: ProductGenreAvgAggregateInputType
    _sum?: ProductGenreSumAggregateInputType
    _min?: ProductGenreMinAggregateInputType
    _max?: ProductGenreMaxAggregateInputType
  }


  export type ProductGenreGroupByOutputType = {
    product_id: number
    genre_id: number
    _count: ProductGenreCountAggregateOutputType | null
    _avg: ProductGenreAvgAggregateOutputType | null
    _sum: ProductGenreSumAggregateOutputType | null
    _min: ProductGenreMinAggregateOutputType | null
    _max: ProductGenreMaxAggregateOutputType | null
  }

  type GetProductGenreGroupByPayload<T extends ProductGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGenreGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGenreGroupByOutputType[P]>
        }
      >
    >


  export type ProductGenreSelect = {
    product_id?: boolean
    genre_id?: boolean
    product?: boolean | ProductArgs
    genre?: boolean | GenreArgs
  }


  export type ProductGenreInclude = {
    product?: boolean | ProductArgs
    genre?: boolean | GenreArgs
  }

  export type ProductGenreGetPayload<S extends boolean | null | undefined | ProductGenreArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductGenre :
    S extends undefined ? never :
    S extends { include: any } & (ProductGenreArgs | ProductGenreFindManyArgs)
    ? ProductGenre  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'genre' ? GenreGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductGenreArgs | ProductGenreFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'genre' ? GenreGetPayload<S['select'][P]> :  P extends keyof ProductGenre ? ProductGenre[P] : never
  } 
      : ProductGenre


  type ProductGenreCountArgs = 
    Omit<ProductGenreFindManyArgs, 'select' | 'include'> & {
      select?: ProductGenreCountAggregateInputType | true
    }

  export interface ProductGenreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ProductGenre that matches the filter.
     * @param {ProductGenreFindUniqueArgs} args - Arguments to find a ProductGenre
     * @example
     * // Get one ProductGenre
     * const productGenre = await prisma.productGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductGenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductGenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductGenre'> extends True ? Prisma__ProductGenreClient<ProductGenreGetPayload<T>> : Prisma__ProductGenreClient<ProductGenreGetPayload<T> | null, null>

    /**
     * Find one ProductGenre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductGenreFindUniqueOrThrowArgs} args - Arguments to find a ProductGenre
     * @example
     * // Get one ProductGenre
     * const productGenre = await prisma.productGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductGenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductGenreFindUniqueOrThrowArgs>
    ): Prisma__ProductGenreClient<ProductGenreGetPayload<T>>

    /**
     * Find the first ProductGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGenreFindFirstArgs} args - Arguments to find a ProductGenre
     * @example
     * // Get one ProductGenre
     * const productGenre = await prisma.productGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductGenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductGenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductGenre'> extends True ? Prisma__ProductGenreClient<ProductGenreGetPayload<T>> : Prisma__ProductGenreClient<ProductGenreGetPayload<T> | null, null>

    /**
     * Find the first ProductGenre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGenreFindFirstOrThrowArgs} args - Arguments to find a ProductGenre
     * @example
     * // Get one ProductGenre
     * const productGenre = await prisma.productGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductGenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductGenreFindFirstOrThrowArgs>
    ): Prisma__ProductGenreClient<ProductGenreGetPayload<T>>

    /**
     * Find zero or more ProductGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductGenres
     * const productGenres = await prisma.productGenre.findMany()
     * 
     * // Get first 10 ProductGenres
     * const productGenres = await prisma.productGenre.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productGenreWithProduct_idOnly = await prisma.productGenre.findMany({ select: { product_id: true } })
     * 
    **/
    findMany<T extends ProductGenreFindManyArgs>(
      args?: SelectSubset<T, ProductGenreFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductGenreGetPayload<T>>>

    /**
     * Create a ProductGenre.
     * @param {ProductGenreCreateArgs} args - Arguments to create a ProductGenre.
     * @example
     * // Create one ProductGenre
     * const ProductGenre = await prisma.productGenre.create({
     *   data: {
     *     // ... data to create a ProductGenre
     *   }
     * })
     * 
    **/
    create<T extends ProductGenreCreateArgs>(
      args: SelectSubset<T, ProductGenreCreateArgs>
    ): Prisma__ProductGenreClient<ProductGenreGetPayload<T>>

    /**
     * Create many ProductGenres.
     *     @param {ProductGenreCreateManyArgs} args - Arguments to create many ProductGenres.
     *     @example
     *     // Create many ProductGenres
     *     const productGenre = await prisma.productGenre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductGenreCreateManyArgs>(
      args?: SelectSubset<T, ProductGenreCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductGenre.
     * @param {ProductGenreDeleteArgs} args - Arguments to delete one ProductGenre.
     * @example
     * // Delete one ProductGenre
     * const ProductGenre = await prisma.productGenre.delete({
     *   where: {
     *     // ... filter to delete one ProductGenre
     *   }
     * })
     * 
    **/
    delete<T extends ProductGenreDeleteArgs>(
      args: SelectSubset<T, ProductGenreDeleteArgs>
    ): Prisma__ProductGenreClient<ProductGenreGetPayload<T>>

    /**
     * Update one ProductGenre.
     * @param {ProductGenreUpdateArgs} args - Arguments to update one ProductGenre.
     * @example
     * // Update one ProductGenre
     * const productGenre = await prisma.productGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductGenreUpdateArgs>(
      args: SelectSubset<T, ProductGenreUpdateArgs>
    ): Prisma__ProductGenreClient<ProductGenreGetPayload<T>>

    /**
     * Delete zero or more ProductGenres.
     * @param {ProductGenreDeleteManyArgs} args - Arguments to filter ProductGenres to delete.
     * @example
     * // Delete a few ProductGenres
     * const { count } = await prisma.productGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductGenreDeleteManyArgs>(
      args?: SelectSubset<T, ProductGenreDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductGenres
     * const productGenre = await prisma.productGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductGenreUpdateManyArgs>(
      args: SelectSubset<T, ProductGenreUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductGenre.
     * @param {ProductGenreUpsertArgs} args - Arguments to update or create a ProductGenre.
     * @example
     * // Update or create a ProductGenre
     * const productGenre = await prisma.productGenre.upsert({
     *   create: {
     *     // ... data to create a ProductGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductGenre we want to update
     *   }
     * })
    **/
    upsert<T extends ProductGenreUpsertArgs>(
      args: SelectSubset<T, ProductGenreUpsertArgs>
    ): Prisma__ProductGenreClient<ProductGenreGetPayload<T>>

    /**
     * Count the number of ProductGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGenreCountArgs} args - Arguments to filter ProductGenres to count.
     * @example
     * // Count the number of ProductGenres
     * const count = await prisma.productGenre.count({
     *   where: {
     *     // ... the filter for the ProductGenres we want to count
     *   }
     * })
    **/
    count<T extends ProductGenreCountArgs>(
      args?: Subset<T, ProductGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductGenreAggregateArgs>(args: Subset<T, ProductGenreAggregateArgs>): Prisma.PrismaPromise<GetProductGenreAggregateType<T>>

    /**
     * Group by ProductGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGenreGroupByArgs['orderBy'] }
        : { orderBy?: ProductGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductGenreClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    genre<T extends GenreArgs= {}>(args?: Subset<T, GenreArgs>): Prisma__GenreClient<GenreGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductGenre base type for findUnique actions
   */
  export type ProductGenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * Filter, which ProductGenre to fetch.
     */
    where: ProductGenreWhereUniqueInput
  }

  /**
   * ProductGenre findUnique
   */
  export interface ProductGenreFindUniqueArgs extends ProductGenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductGenre findUniqueOrThrow
   */
  export type ProductGenreFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * Filter, which ProductGenre to fetch.
     */
    where: ProductGenreWhereUniqueInput
  }


  /**
   * ProductGenre base type for findFirst actions
   */
  export type ProductGenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * Filter, which ProductGenre to fetch.
     */
    where?: ProductGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGenres to fetch.
     */
    orderBy?: Enumerable<ProductGenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductGenres.
     */
    cursor?: ProductGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductGenres.
     */
    distinct?: Enumerable<ProductGenreScalarFieldEnum>
  }

  /**
   * ProductGenre findFirst
   */
  export interface ProductGenreFindFirstArgs extends ProductGenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductGenre findFirstOrThrow
   */
  export type ProductGenreFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * Filter, which ProductGenre to fetch.
     */
    where?: ProductGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGenres to fetch.
     */
    orderBy?: Enumerable<ProductGenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductGenres.
     */
    cursor?: ProductGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductGenres.
     */
    distinct?: Enumerable<ProductGenreScalarFieldEnum>
  }


  /**
   * ProductGenre findMany
   */
  export type ProductGenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * Filter, which ProductGenres to fetch.
     */
    where?: ProductGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGenres to fetch.
     */
    orderBy?: Enumerable<ProductGenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductGenres.
     */
    cursor?: ProductGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGenres.
     */
    skip?: number
    distinct?: Enumerable<ProductGenreScalarFieldEnum>
  }


  /**
   * ProductGenre create
   */
  export type ProductGenreCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * The data needed to create a ProductGenre.
     */
    data: XOR<ProductGenreCreateInput, ProductGenreUncheckedCreateInput>
  }


  /**
   * ProductGenre createMany
   */
  export type ProductGenreCreateManyArgs = {
    /**
     * The data used to create many ProductGenres.
     */
    data: Enumerable<ProductGenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductGenre update
   */
  export type ProductGenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * The data needed to update a ProductGenre.
     */
    data: XOR<ProductGenreUpdateInput, ProductGenreUncheckedUpdateInput>
    /**
     * Choose, which ProductGenre to update.
     */
    where: ProductGenreWhereUniqueInput
  }


  /**
   * ProductGenre updateMany
   */
  export type ProductGenreUpdateManyArgs = {
    /**
     * The data used to update ProductGenres.
     */
    data: XOR<ProductGenreUpdateManyMutationInput, ProductGenreUncheckedUpdateManyInput>
    /**
     * Filter which ProductGenres to update
     */
    where?: ProductGenreWhereInput
  }


  /**
   * ProductGenre upsert
   */
  export type ProductGenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * The filter to search for the ProductGenre to update in case it exists.
     */
    where: ProductGenreWhereUniqueInput
    /**
     * In case the ProductGenre found by the `where` argument doesn't exist, create a new ProductGenre with this data.
     */
    create: XOR<ProductGenreCreateInput, ProductGenreUncheckedCreateInput>
    /**
     * In case the ProductGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductGenreUpdateInput, ProductGenreUncheckedUpdateInput>
  }


  /**
   * ProductGenre delete
   */
  export type ProductGenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
    /**
     * Filter which ProductGenre to delete.
     */
    where: ProductGenreWhereUniqueInput
  }


  /**
   * ProductGenre deleteMany
   */
  export type ProductGenreDeleteManyArgs = {
    /**
     * Filter which ProductGenres to delete
     */
    where?: ProductGenreWhereInput
  }


  /**
   * ProductGenre without action
   */
  export type ProductGenreArgs = {
    /**
     * Select specific fields to fetch from the ProductGenre
     */
    select?: ProductGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGenreInclude | null
  }



  /**
   * Model Review
   */


  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    user_id: number | null
    product_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    user_id: number | null
    product_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    user_id: number | null
    product_id: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    user_id: number | null
    product_id: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    comment: number
    rating: number
    user_id: number
    product_id: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    user_id?: true
    product_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    user_id?: true
    product_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    user_id?: true
    product_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    user_id?: true
    product_id?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    user_id?: true
    product_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs = {
    where?: ReviewWhereInput
    orderBy?: Enumerable<ReviewOrderByWithAggregationInput>
    by: ReviewScalarFieldEnum[]
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }


  export type ReviewGroupByOutputType = {
    id: number
    comment: string
    rating: number
    user_id: number
    product_id: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect = {
    id?: boolean
    comment?: boolean
    rating?: boolean
    user_id?: boolean
    product_id?: boolean
    user?: boolean | UserArgs
    product?: boolean | ProductArgs
  }


  export type ReviewInclude = {
    user?: boolean | UserArgs
    product?: boolean | ProductArgs
  }

  export type ReviewGetPayload<S extends boolean | null | undefined | ReviewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Review :
    S extends undefined ? never :
    S extends { include: any } & (ReviewArgs | ReviewFindManyArgs)
    ? Review  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ReviewArgs | ReviewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof Review ? Review[P] : never
  } 
      : Review


  type ReviewCountArgs = 
    Omit<ReviewFindManyArgs, 'select' | 'include'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReviewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Review'> extends True ? Prisma__ReviewClient<ReviewGetPayload<T>> : Prisma__ReviewClient<ReviewGetPayload<T> | null, null>

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindUniqueOrThrowArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReviewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Review'> extends True ? Prisma__ReviewClient<ReviewGetPayload<T>> : Prisma__ReviewClient<ReviewGetPayload<T> | null, null>

    /**
     * Find the first Review that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs>
    ): Prisma.PrismaPromise<Array<ReviewGetPayload<T>>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Create many Reviews.
     *     @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewCreateManyArgs>(
      args?: SelectSubset<T, ReviewCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReviewClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Review base type for findUnique actions
   */
  export type ReviewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUnique
   */
  export interface ReviewFindUniqueArgs extends ReviewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review base type for findFirst actions
   */
  export type ReviewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }

  /**
   * Review findFirst
   */
  export interface ReviewFindFirstArgs extends ReviewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Review findMany
   */
  export type ReviewFindManyArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Review create
   */
  export type ReviewCreateArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }


  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs = {
    /**
     * The data used to create many Reviews.
     */
    data: Enumerable<ReviewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Review update
   */
  export type ReviewUpdateArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }


  /**
   * Review upsert
   */
  export type ReviewUpsertArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }


  /**
   * Review delete
   */
  export type ReviewDeleteArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }


  /**
   * Review without action
   */
  export type ReviewArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
  }



  /**
   * Model Publisher
   */


  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  export type PublisherAvgAggregateOutputType = {
    id: number | null
  }

  export type PublisherSumAggregateOutputType = {
    id: number | null
  }

  export type PublisherMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PublisherMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PublisherCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PublisherAvgAggregateInputType = {
    id?: true
  }

  export type PublisherSumAggregateInputType = {
    id?: true
  }

  export type PublisherMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PublisherMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PublisherCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PublisherAggregateArgs = {
    /**
     * Filter which Publisher to aggregate.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: Enumerable<PublisherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publishers
    **/
    _count?: true | PublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublisherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublisherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherMaxAggregateInputType
  }

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>
  }




  export type PublisherGroupByArgs = {
    where?: PublisherWhereInput
    orderBy?: Enumerable<PublisherOrderByWithAggregationInput>
    by: PublisherScalarFieldEnum[]
    having?: PublisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherCountAggregateInputType | true
    _avg?: PublisherAvgAggregateInputType
    _sum?: PublisherSumAggregateInputType
    _min?: PublisherMinAggregateInputType
    _max?: PublisherMaxAggregateInputType
  }


  export type PublisherGroupByOutputType = {
    id: number
    name: string
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  type GetPublisherGroupByPayload<T extends PublisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
        }
      >
    >


  export type PublisherSelect = {
    id?: boolean
    name?: boolean
    product?: boolean | Publisher$productArgs
    _count?: boolean | PublisherCountOutputTypeArgs
  }


  export type PublisherInclude = {
    product?: boolean | Publisher$productArgs
    _count?: boolean | PublisherCountOutputTypeArgs
  }

  export type PublisherGetPayload<S extends boolean | null | undefined | PublisherArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Publisher :
    S extends undefined ? never :
    S extends { include: any } & (PublisherArgs | PublisherFindManyArgs)
    ? Publisher  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? PublisherCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PublisherArgs | PublisherFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? PublisherCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Publisher ? Publisher[P] : never
  } 
      : Publisher


  type PublisherCountArgs = 
    Omit<PublisherFindManyArgs, 'select' | 'include'> & {
      select?: PublisherCountAggregateInputType | true
    }

  export interface PublisherDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Publisher that matches the filter.
     * @param {PublisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublisherFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublisherFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Publisher'> extends True ? Prisma__PublisherClient<PublisherGetPayload<T>> : Prisma__PublisherClient<PublisherGetPayload<T> | null, null>

    /**
     * Find one Publisher that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublisherFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PublisherFindUniqueOrThrowArgs>
    ): Prisma__PublisherClient<PublisherGetPayload<T>>

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublisherFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublisherFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Publisher'> extends True ? Prisma__PublisherClient<PublisherGetPayload<T>> : Prisma__PublisherClient<PublisherGetPayload<T> | null, null>

    /**
     * Find the first Publisher that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublisherFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PublisherFindFirstOrThrowArgs>
    ): Prisma__PublisherClient<PublisherGetPayload<T>>

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     * 
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublisherFindManyArgs>(
      args?: SelectSubset<T, PublisherFindManyArgs>
    ): Prisma.PrismaPromise<Array<PublisherGetPayload<T>>>

    /**
     * Create a Publisher.
     * @param {PublisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     * 
    **/
    create<T extends PublisherCreateArgs>(
      args: SelectSubset<T, PublisherCreateArgs>
    ): Prisma__PublisherClient<PublisherGetPayload<T>>

    /**
     * Create many Publishers.
     *     @param {PublisherCreateManyArgs} args - Arguments to create many Publishers.
     *     @example
     *     // Create many Publishers
     *     const publisher = await prisma.publisher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublisherCreateManyArgs>(
      args?: SelectSubset<T, PublisherCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Publisher.
     * @param {PublisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     * 
    **/
    delete<T extends PublisherDeleteArgs>(
      args: SelectSubset<T, PublisherDeleteArgs>
    ): Prisma__PublisherClient<PublisherGetPayload<T>>

    /**
     * Update one Publisher.
     * @param {PublisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublisherUpdateArgs>(
      args: SelectSubset<T, PublisherUpdateArgs>
    ): Prisma__PublisherClient<PublisherGetPayload<T>>

    /**
     * Delete zero or more Publishers.
     * @param {PublisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublisherDeleteManyArgs>(
      args?: SelectSubset<T, PublisherDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublisherUpdateManyArgs>(
      args: SelectSubset<T, PublisherUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publisher.
     * @param {PublisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
    **/
    upsert<T extends PublisherUpsertArgs>(
      args: SelectSubset<T, PublisherUpsertArgs>
    ): Prisma__PublisherClient<PublisherGetPayload<T>>

    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
    **/
    count<T extends PublisherCountArgs>(
      args?: Subset<T, PublisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublisherAggregateArgs>(args: Subset<T, PublisherAggregateArgs>): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherGroupByArgs['orderBy'] }
        : { orderBy?: PublisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublisherClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends Publisher$productArgs= {}>(args?: Subset<T, Publisher$productArgs>): Prisma.PrismaPromise<Array<ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Publisher base type for findUnique actions
   */
  export type PublisherFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findUnique
   */
  export interface PublisherFindUniqueArgs extends PublisherFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Publisher findUniqueOrThrow
   */
  export type PublisherFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }


  /**
   * Publisher base type for findFirst actions
   */
  export type PublisherFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: Enumerable<PublisherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: Enumerable<PublisherScalarFieldEnum>
  }

  /**
   * Publisher findFirst
   */
  export interface PublisherFindFirstArgs extends PublisherFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Publisher findFirstOrThrow
   */
  export type PublisherFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: Enumerable<PublisherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: Enumerable<PublisherScalarFieldEnum>
  }


  /**
   * Publisher findMany
   */
  export type PublisherFindManyArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * Filter, which Publishers to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: Enumerable<PublisherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    distinct?: Enumerable<PublisherScalarFieldEnum>
  }


  /**
   * Publisher create
   */
  export type PublisherCreateArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * The data needed to create a Publisher.
     */
    data: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
  }


  /**
   * Publisher createMany
   */
  export type PublisherCreateManyArgs = {
    /**
     * The data used to create many Publishers.
     */
    data: Enumerable<PublisherCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Publisher update
   */
  export type PublisherUpdateArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * The data needed to update a Publisher.
     */
    data: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
    /**
     * Choose, which Publisher to update.
     */
    where: PublisherWhereUniqueInput
  }


  /**
   * Publisher updateMany
   */
  export type PublisherUpdateManyArgs = {
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
  }


  /**
   * Publisher upsert
   */
  export type PublisherUpsertArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * The filter to search for the Publisher to update in case it exists.
     */
    where: PublisherWhereUniqueInput
    /**
     * In case the Publisher found by the `where` argument doesn't exist, create a new Publisher with this data.
     */
    create: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
    /**
     * In case the Publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
  }


  /**
   * Publisher delete
   */
  export type PublisherDeleteArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
    /**
     * Filter which Publisher to delete.
     */
    where: PublisherWhereUniqueInput
  }


  /**
   * Publisher deleteMany
   */
  export type PublisherDeleteManyArgs = {
    /**
     * Filter which Publishers to delete
     */
    where?: PublisherWhereInput
  }


  /**
   * Publisher.product
   */
  export type Publisher$productArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Publisher without action
   */
  export type PublisherArgs = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublisherInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    cart_id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    cart_id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    order_status: OrderStatus | null
    ordered_at: Date | null
    cart_id: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    order_status: OrderStatus | null
    ordered_at: Date | null
    cart_id: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    order_status: number
    ordered_at: number
    cart_id: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    cart_id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    cart_id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    order_status?: true
    ordered_at?: true
    cart_id?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    order_status?: true
    ordered_at?: true
    cart_id?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    order_status?: true
    ordered_at?: true
    cart_id?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: OrderScalarFieldEnum[]
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: number
    order_status: OrderStatus
    ordered_at: Date
    cart_id: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    id?: boolean
    order_status?: boolean
    ordered_at?: boolean
    cart_id?: boolean
    cart?: boolean | CartArgs
  }


  export type OrderInclude = {
    cart?: boolean | CartArgs
  }

  export type OrderGetPayload<S extends boolean | null | undefined | OrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Order :
    S extends undefined ? never :
    S extends { include: any } & (OrderArgs | OrderFindManyArgs)
    ? Order  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cart' ? CartGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrderArgs | OrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cart' ? CartGetPayload<S['select'][P]> :  P extends keyof Order ? Order[P] : never
  } 
      : Order


  type OrderCountArgs = 
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrderGetPayload<T>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cart<T extends CartArgs= {}>(args?: Subset<T, CartArgs>): Prisma__CartClient<CartGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUnique
   */
  export interface OrderFindUniqueArgs extends OrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order findFirst
   */
  export interface OrderFindFirstArgs extends OrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    /**
     * The data used to create many Orders.
     */
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
  }



  /**
   * Model ProductType
   */


  export type AggregateProductType = {
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  export type ProductTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductTypeSumAggregateOutputType = {
    id: number | null
  }

  export type ProductTypeMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type ProductTypeMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type ProductTypeCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type ProductTypeAvgAggregateInputType = {
    id?: true
  }

  export type ProductTypeSumAggregateInputType = {
    id?: true
  }

  export type ProductTypeMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type ProductTypeMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type ProductTypeCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type ProductTypeAggregateArgs = {
    /**
     * Filter which ProductType to aggregate.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: Enumerable<ProductTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTypes
    **/
    _count?: true | ProductTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTypeMaxAggregateInputType
  }

  export type GetProductTypeAggregateType<T extends ProductTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductType[P]>
      : GetScalarType<T[P], AggregateProductType[P]>
  }




  export type ProductTypeGroupByArgs = {
    where?: ProductTypeWhereInput
    orderBy?: Enumerable<ProductTypeOrderByWithAggregationInput>
    by: ProductTypeScalarFieldEnum[]
    having?: ProductTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTypeCountAggregateInputType | true
    _avg?: ProductTypeAvgAggregateInputType
    _sum?: ProductTypeSumAggregateInputType
    _min?: ProductTypeMinAggregateInputType
    _max?: ProductTypeMaxAggregateInputType
  }


  export type ProductTypeGroupByOutputType = {
    id: number
    type: string
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  type GetProductTypeGroupByPayload<T extends ProductTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProductTypeSelect = {
    id?: boolean
    type?: boolean
    product?: boolean | ProductType$productArgs
    _count?: boolean | ProductTypeCountOutputTypeArgs
  }


  export type ProductTypeInclude = {
    product?: boolean | ProductType$productArgs
    _count?: boolean | ProductTypeCountOutputTypeArgs
  }

  export type ProductTypeGetPayload<S extends boolean | null | undefined | ProductTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductType :
    S extends undefined ? never :
    S extends { include: any } & (ProductTypeArgs | ProductTypeFindManyArgs)
    ? ProductType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductTypeArgs | ProductTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ProductType ? ProductType[P] : never
  } 
      : ProductType


  type ProductTypeCountArgs = 
    Omit<ProductTypeFindManyArgs, 'select' | 'include'> & {
      select?: ProductTypeCountAggregateInputType | true
    }

  export interface ProductTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ProductType that matches the filter.
     * @param {ProductTypeFindUniqueArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductType'> extends True ? Prisma__ProductTypeClient<ProductTypeGetPayload<T>> : Prisma__ProductTypeClient<ProductTypeGetPayload<T> | null, null>

    /**
     * Find one ProductType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductTypeFindUniqueOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductTypeFindUniqueOrThrowArgs>
    ): Prisma__ProductTypeClient<ProductTypeGetPayload<T>>

    /**
     * Find the first ProductType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductType'> extends True ? Prisma__ProductTypeClient<ProductTypeGetPayload<T>> : Prisma__ProductTypeClient<ProductTypeGetPayload<T> | null, null>

    /**
     * Find the first ProductType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductTypeFindFirstOrThrowArgs>
    ): Prisma__ProductTypeClient<ProductTypeGetPayload<T>>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTypes
     * const productTypes = await prisma.productType.findMany()
     * 
     * // Get first 10 ProductTypes
     * const productTypes = await prisma.productType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTypeWithIdOnly = await prisma.productType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductTypeFindManyArgs>(
      args?: SelectSubset<T, ProductTypeFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductTypeGetPayload<T>>>

    /**
     * Create a ProductType.
     * @param {ProductTypeCreateArgs} args - Arguments to create a ProductType.
     * @example
     * // Create one ProductType
     * const ProductType = await prisma.productType.create({
     *   data: {
     *     // ... data to create a ProductType
     *   }
     * })
     * 
    **/
    create<T extends ProductTypeCreateArgs>(
      args: SelectSubset<T, ProductTypeCreateArgs>
    ): Prisma__ProductTypeClient<ProductTypeGetPayload<T>>

    /**
     * Create many ProductTypes.
     *     @param {ProductTypeCreateManyArgs} args - Arguments to create many ProductTypes.
     *     @example
     *     // Create many ProductTypes
     *     const productType = await prisma.productType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductTypeCreateManyArgs>(
      args?: SelectSubset<T, ProductTypeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductType.
     * @param {ProductTypeDeleteArgs} args - Arguments to delete one ProductType.
     * @example
     * // Delete one ProductType
     * const ProductType = await prisma.productType.delete({
     *   where: {
     *     // ... filter to delete one ProductType
     *   }
     * })
     * 
    **/
    delete<T extends ProductTypeDeleteArgs>(
      args: SelectSubset<T, ProductTypeDeleteArgs>
    ): Prisma__ProductTypeClient<ProductTypeGetPayload<T>>

    /**
     * Update one ProductType.
     * @param {ProductTypeUpdateArgs} args - Arguments to update one ProductType.
     * @example
     * // Update one ProductType
     * const productType = await prisma.productType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductTypeUpdateArgs>(
      args: SelectSubset<T, ProductTypeUpdateArgs>
    ): Prisma__ProductTypeClient<ProductTypeGetPayload<T>>

    /**
     * Delete zero or more ProductTypes.
     * @param {ProductTypeDeleteManyArgs} args - Arguments to filter ProductTypes to delete.
     * @example
     * // Delete a few ProductTypes
     * const { count } = await prisma.productType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductTypeDeleteManyArgs>(
      args?: SelectSubset<T, ProductTypeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTypes
     * const productType = await prisma.productType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductTypeUpdateManyArgs>(
      args: SelectSubset<T, ProductTypeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductType.
     * @param {ProductTypeUpsertArgs} args - Arguments to update or create a ProductType.
     * @example
     * // Update or create a ProductType
     * const productType = await prisma.productType.upsert({
     *   create: {
     *     // ... data to create a ProductType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductType we want to update
     *   }
     * })
    **/
    upsert<T extends ProductTypeUpsertArgs>(
      args: SelectSubset<T, ProductTypeUpsertArgs>
    ): Prisma__ProductTypeClient<ProductTypeGetPayload<T>>

    /**
     * Count the number of ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeCountArgs} args - Arguments to filter ProductTypes to count.
     * @example
     * // Count the number of ProductTypes
     * const count = await prisma.productType.count({
     *   where: {
     *     // ... the filter for the ProductTypes we want to count
     *   }
     * })
    **/
    count<T extends ProductTypeCountArgs>(
      args?: Subset<T, ProductTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTypeAggregateArgs>(args: Subset<T, ProductTypeAggregateArgs>): Prisma.PrismaPromise<GetProductTypeAggregateType<T>>

    /**
     * Group by ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProductTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductTypeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductType$productArgs= {}>(args?: Subset<T, ProductType$productArgs>): Prisma.PrismaPromise<Array<ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductType base type for findUnique actions
   */
  export type ProductTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findUnique
   */
  export interface ProductTypeFindUniqueArgs extends ProductTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductType findUniqueOrThrow
   */
  export type ProductTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }


  /**
   * ProductType base type for findFirst actions
   */
  export type ProductTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: Enumerable<ProductTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: Enumerable<ProductTypeScalarFieldEnum>
  }

  /**
   * ProductType findFirst
   */
  export interface ProductTypeFindFirstArgs extends ProductTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductType findFirstOrThrow
   */
  export type ProductTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: Enumerable<ProductTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: Enumerable<ProductTypeScalarFieldEnum>
  }


  /**
   * ProductType findMany
   */
  export type ProductTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * Filter, which ProductTypes to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: Enumerable<ProductTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    distinct?: Enumerable<ProductTypeScalarFieldEnum>
  }


  /**
   * ProductType create
   */
  export type ProductTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * The data needed to create a ProductType.
     */
    data: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
  }


  /**
   * ProductType createMany
   */
  export type ProductTypeCreateManyArgs = {
    /**
     * The data used to create many ProductTypes.
     */
    data: Enumerable<ProductTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductType update
   */
  export type ProductTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * The data needed to update a ProductType.
     */
    data: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
    /**
     * Choose, which ProductType to update.
     */
    where: ProductTypeWhereUniqueInput
  }


  /**
   * ProductType updateMany
   */
  export type ProductTypeUpdateManyArgs = {
    /**
     * The data used to update ProductTypes.
     */
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProductTypes to update
     */
    where?: ProductTypeWhereInput
  }


  /**
   * ProductType upsert
   */
  export type ProductTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * The filter to search for the ProductType to update in case it exists.
     */
    where: ProductTypeWhereUniqueInput
    /**
     * In case the ProductType found by the `where` argument doesn't exist, create a new ProductType with this data.
     */
    create: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
    /**
     * In case the ProductType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
  }


  /**
   * ProductType delete
   */
  export type ProductTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
    /**
     * Filter which ProductType to delete.
     */
    where: ProductTypeWhereUniqueInput
  }


  /**
   * ProductType deleteMany
   */
  export type ProductTypeDeleteManyArgs = {
    /**
     * Filter which ProductTypes to delete
     */
    where?: ProductTypeWhereInput
  }


  /**
   * ProductType.product
   */
  export type ProductType$productArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * ProductType without action
   */
  export type ProductTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductTypeInclude | null
  }



  /**
   * Model Cart
   */


  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    status: CartStatus | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    status: CartStatus | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    user_id: number
    status: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    user_id?: true
    status?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    user_id?: true
    status?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    user_id?: true
    status?: true
    _all?: true
  }

  export type CartAggregateArgs = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs = {
    where?: CartWhereInput
    orderBy?: Enumerable<CartOrderByWithAggregationInput>
    by: CartScalarFieldEnum[]
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }


  export type CartGroupByOutputType = {
    id: number
    user_id: number
    status: CartStatus
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect = {
    id?: boolean
    user_id?: boolean
    status?: boolean
    user?: boolean | UserArgs
    cartItems?: boolean | Cart$cartItemsArgs
    order?: boolean | Cart$orderArgs
    _count?: boolean | CartCountOutputTypeArgs
  }


  export type CartInclude = {
    user?: boolean | UserArgs
    cartItems?: boolean | Cart$cartItemsArgs
    order?: boolean | Cart$orderArgs
    _count?: boolean | CartCountOutputTypeArgs
  }

  export type CartGetPayload<S extends boolean | null | undefined | CartArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Cart :
    S extends undefined ? never :
    S extends { include: any } & (CartArgs | CartFindManyArgs)
    ? Cart  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'cartItems' ? Array < CartItemGetPayload<S['include'][P]>>  :
        P extends 'order' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends '_count' ? CartCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CartArgs | CartFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'cartItems' ? Array < CartItemGetPayload<S['select'][P]>>  :
        P extends 'order' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends '_count' ? CartCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Cart ? Cart[P] : never
  } 
      : Cart


  type CartCountArgs = 
    Omit<CartFindManyArgs, 'select' | 'include'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CartFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cart'> extends True ? Prisma__CartClient<CartGetPayload<T>> : Prisma__CartClient<CartGetPayload<T> | null, null>

    /**
     * Find one Cart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CartFindUniqueOrThrowArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CartFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cart'> extends True ? Prisma__CartClient<CartGetPayload<T>> : Prisma__CartClient<CartGetPayload<T> | null, null>

    /**
     * Find the first Cart that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartFindFirstOrThrowArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartFindManyArgs>(
      args?: SelectSubset<T, CartFindManyArgs>
    ): Prisma.PrismaPromise<Array<CartGetPayload<T>>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
    **/
    create<T extends CartCreateArgs>(
      args: SelectSubset<T, CartCreateArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Create many Carts.
     *     @param {CartCreateManyArgs} args - Arguments to create many Carts.
     *     @example
     *     // Create many Carts
     *     const cart = await prisma.cart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartCreateManyArgs>(
      args?: SelectSubset<T, CartCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
    **/
    delete<T extends CartDeleteArgs>(
      args: SelectSubset<T, CartDeleteArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartUpdateArgs>(
      args: SelectSubset<T, CartUpdateArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartDeleteManyArgs>(
      args?: SelectSubset<T, CartDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartUpdateManyArgs>(
      args: SelectSubset<T, CartUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
    **/
    upsert<T extends CartUpsertArgs>(
      args: SelectSubset<T, CartUpsertArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CartClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    cartItems<T extends Cart$cartItemsArgs= {}>(args?: Subset<T, Cart$cartItemsArgs>): Prisma.PrismaPromise<Array<CartItemGetPayload<T>>| Null>;

    order<T extends Cart$orderArgs= {}>(args?: Subset<T, Cart$orderArgs>): Prisma.PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cart base type for findUnique actions
   */
  export type CartFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUnique
   */
  export interface CartFindUniqueArgs extends CartFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }


  /**
   * Cart base type for findFirst actions
   */
  export type CartFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: Enumerable<CartScalarFieldEnum>
  }

  /**
   * Cart findFirst
   */
  export interface CartFindFirstArgs extends CartFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * Cart findMany
   */
  export type CartFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * Cart create
   */
  export type CartCreateArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }


  /**
   * Cart createMany
   */
  export type CartCreateManyArgs = {
    /**
     * The data used to create many Carts.
     */
    data: Enumerable<CartCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cart update
   */
  export type CartUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }


  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
  }


  /**
   * Cart upsert
   */
  export type CartUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }


  /**
   * Cart delete
   */
  export type CartDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }


  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
  }


  /**
   * Cart.cartItems
   */
  export type Cart$cartItemsArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * Cart.order
   */
  export type Cart$orderArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Cart without action
   */
  export type CartArgs = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude | null
  }



  /**
   * Model CartItem
   */


  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    cart_id: number | null
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    cart_id: number | null
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    cart_id: number | null
    quantity: number | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    cart_id: number | null
    quantity: number | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    product_id: number
    cart_id: number
    quantity: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    product_id?: true
    cart_id?: true
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    product_id?: true
    cart_id?: true
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    product_id?: true
    cart_id?: true
    quantity?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    product_id?: true
    cart_id?: true
    quantity?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    product_id?: true
    cart_id?: true
    quantity?: true
    _all?: true
  }

  export type CartItemAggregateArgs = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs = {
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithAggregationInput>
    by: CartItemScalarFieldEnum[]
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }


  export type CartItemGroupByOutputType = {
    id: number
    product_id: number
    cart_id: number
    quantity: number
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect = {
    id?: boolean
    product_id?: boolean
    cart_id?: boolean
    quantity?: boolean
    product?: boolean | ProductArgs
    cart?: boolean | CartArgs
  }


  export type CartItemInclude = {
    product?: boolean | ProductArgs
    cart?: boolean | CartArgs
  }

  export type CartItemGetPayload<S extends boolean | null | undefined | CartItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CartItem :
    S extends undefined ? never :
    S extends { include: any } & (CartItemArgs | CartItemFindManyArgs)
    ? CartItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'cart' ? CartGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CartItemArgs | CartItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'cart' ? CartGetPayload<S['select'][P]> :  P extends keyof CartItem ? CartItem[P] : never
  } 
      : CartItem


  type CartItemCountArgs = 
    Omit<CartItemFindManyArgs, 'select' | 'include'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CartItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CartItem'> extends True ? Prisma__CartItemClient<CartItemGetPayload<T>> : Prisma__CartItemClient<CartItemGetPayload<T> | null, null>

    /**
     * Find one CartItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CartItemFindUniqueOrThrowArgs>
    ): Prisma__CartItemClient<CartItemGetPayload<T>>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CartItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CartItem'> extends True ? Prisma__CartItemClient<CartItemGetPayload<T>> : Prisma__CartItemClient<CartItemGetPayload<T> | null, null>

    /**
     * Find the first CartItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartItemFindFirstOrThrowArgs>
    ): Prisma__CartItemClient<CartItemGetPayload<T>>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartItemFindManyArgs>(
      args?: SelectSubset<T, CartItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<CartItemGetPayload<T>>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
    **/
    create<T extends CartItemCreateArgs>(
      args: SelectSubset<T, CartItemCreateArgs>
    ): Prisma__CartItemClient<CartItemGetPayload<T>>

    /**
     * Create many CartItems.
     *     @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     *     @example
     *     // Create many CartItems
     *     const cartItem = await prisma.cartItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartItemCreateManyArgs>(
      args?: SelectSubset<T, CartItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
    **/
    delete<T extends CartItemDeleteArgs>(
      args: SelectSubset<T, CartItemDeleteArgs>
    ): Prisma__CartItemClient<CartItemGetPayload<T>>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartItemUpdateArgs>(
      args: SelectSubset<T, CartItemUpdateArgs>
    ): Prisma__CartItemClient<CartItemGetPayload<T>>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartItemDeleteManyArgs>(
      args?: SelectSubset<T, CartItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartItemUpdateManyArgs>(
      args: SelectSubset<T, CartItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
    **/
    upsert<T extends CartItemUpsertArgs>(
      args: SelectSubset<T, CartItemUpsertArgs>
    ): Prisma__CartItemClient<CartItemGetPayload<T>>

    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CartItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    cart<T extends CartArgs= {}>(args?: Subset<T, CartArgs>): Prisma__CartClient<CartGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CartItem base type for findUnique actions
   */
  export type CartItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUnique
   */
  export interface CartItemFindUniqueArgs extends CartItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem base type for findFirst actions
   */
  export type CartItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }

  /**
   * CartItem findFirst
   */
  export interface CartItemFindFirstArgs extends CartItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * CartItem create
   */
  export type CartItemCreateArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }


  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs = {
    /**
     * The data used to create many CartItems.
     */
    data: Enumerable<CartItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CartItem update
   */
  export type CartItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }


  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem without action
   */
  export type CartItemArgs = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude | null
  }



  /**
   * Model RefreshToken
   */


  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    refresh_token: string | null
    user_id: number | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    refresh_token: string | null
    user_id: number | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    refresh_token: number
    user_id: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    refresh_token?: true
    user_id?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    refresh_token?: true
    user_id?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    refresh_token?: true
    user_id?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs = {
    where?: RefreshTokenWhereInput
    orderBy?: Enumerable<RefreshTokenOrderByWithAggregationInput>
    by: RefreshTokenScalarFieldEnum[]
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }


  export type RefreshTokenGroupByOutputType = {
    id: number
    refresh_token: string
    user_id: number
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect = {
    id?: boolean
    refresh_token?: boolean
    user_id?: boolean
    user?: boolean | UserArgs
  }


  export type RefreshTokenInclude = {
    user?: boolean | UserArgs
  }

  export type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RefreshToken :
    S extends undefined ? never :
    S extends { include: any } & (RefreshTokenArgs | RefreshTokenFindManyArgs)
    ? RefreshToken  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RefreshTokenArgs | RefreshTokenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof RefreshToken ? RefreshToken[P] : never
  } 
      : RefreshToken


  type RefreshTokenCountArgs = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RefreshTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RefreshToken'> extends True ? Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>> : Prisma__RefreshTokenClient<RefreshTokenGetPayload<T> | null, null>

    /**
     * Find one RefreshToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs>
    ): Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RefreshTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RefreshToken'> extends True ? Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>> : Prisma__RefreshTokenClient<RefreshTokenGetPayload<T> | null, null>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs>
    ): Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RefreshTokenFindManyArgs>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs>
    ): Prisma.PrismaPromise<Array<RefreshTokenGetPayload<T>>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
    **/
    create<T extends RefreshTokenCreateArgs>(
      args: SelectSubset<T, RefreshTokenCreateArgs>
    ): Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>

    /**
     * Create many RefreshTokens.
     *     @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     *     @example
     *     // Create many RefreshTokens
     *     const refreshToken = await prisma.refreshToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RefreshTokenCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
    **/
    delete<T extends RefreshTokenDeleteArgs>(
      args: SelectSubset<T, RefreshTokenDeleteArgs>
    ): Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RefreshTokenUpdateArgs>(
      args: SelectSubset<T, RefreshTokenUpdateArgs>
    ): Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RefreshTokenDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RefreshTokenUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
    **/
    upsert<T extends RefreshTokenUpsertArgs>(
      args: SelectSubset<T, RefreshTokenUpsertArgs>
    ): Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RefreshTokenClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RefreshToken base type for findUnique actions
   */
  export type RefreshTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUnique
   */
  export interface RefreshTokenFindUniqueArgs extends RefreshTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken base type for findFirst actions
   */
  export type RefreshTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }

  /**
   * RefreshToken findFirst
   */
  export interface RefreshTokenFindFirstArgs extends RefreshTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }


  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }


  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }


  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: Enumerable<RefreshTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }


  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken without action
   */
  export type RefreshTokenArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude | null
  }



  /**
   * Model ProductImages
   */


  export type AggregateProductImages = {
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  export type ProductImagesAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type ProductImagesSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type ProductImagesMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    image_url: string | null
  }

  export type ProductImagesMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    image_url: string | null
  }

  export type ProductImagesCountAggregateOutputType = {
    id: number
    product_id: number
    image_url: number
    _all: number
  }


  export type ProductImagesAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type ProductImagesSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type ProductImagesMinAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
  }

  export type ProductImagesMaxAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
  }

  export type ProductImagesCountAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
    _all?: true
  }

  export type ProductImagesAggregateArgs = {
    /**
     * Filter which ProductImages to aggregate.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: Enumerable<ProductImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImagesMaxAggregateInputType
  }

  export type GetProductImagesAggregateType<T extends ProductImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImages[P]>
      : GetScalarType<T[P], AggregateProductImages[P]>
  }




  export type ProductImagesGroupByArgs = {
    where?: ProductImagesWhereInput
    orderBy?: Enumerable<ProductImagesOrderByWithAggregationInput>
    by: ProductImagesScalarFieldEnum[]
    having?: ProductImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImagesCountAggregateInputType | true
    _avg?: ProductImagesAvgAggregateInputType
    _sum?: ProductImagesSumAggregateInputType
    _min?: ProductImagesMinAggregateInputType
    _max?: ProductImagesMaxAggregateInputType
  }


  export type ProductImagesGroupByOutputType = {
    id: number
    product_id: number
    image_url: string
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  type GetProductImagesGroupByPayload<T extends ProductImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
        }
      >
    >


  export type ProductImagesSelect = {
    id?: boolean
    product_id?: boolean
    image_url?: boolean
    product?: boolean | ProductArgs
  }


  export type ProductImagesInclude = {
    product?: boolean | ProductArgs
  }

  export type ProductImagesGetPayload<S extends boolean | null | undefined | ProductImagesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductImages :
    S extends undefined ? never :
    S extends { include: any } & (ProductImagesArgs | ProductImagesFindManyArgs)
    ? ProductImages  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductImagesArgs | ProductImagesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof ProductImages ? ProductImages[P] : never
  } 
      : ProductImages


  type ProductImagesCountArgs = 
    Omit<ProductImagesFindManyArgs, 'select' | 'include'> & {
      select?: ProductImagesCountAggregateInputType | true
    }

  export interface ProductImagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ProductImages that matches the filter.
     * @param {ProductImagesFindUniqueArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductImagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductImagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductImages'> extends True ? Prisma__ProductImagesClient<ProductImagesGetPayload<T>> : Prisma__ProductImagesClient<ProductImagesGetPayload<T> | null, null>

    /**
     * Find one ProductImages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductImagesFindUniqueOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductImagesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductImagesFindUniqueOrThrowArgs>
    ): Prisma__ProductImagesClient<ProductImagesGetPayload<T>>

    /**
     * Find the first ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductImagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductImagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductImages'> extends True ? Prisma__ProductImagesClient<ProductImagesGetPayload<T>> : Prisma__ProductImagesClient<ProductImagesGetPayload<T> | null, null>

    /**
     * Find the first ProductImages that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductImagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductImagesFindFirstOrThrowArgs>
    ): Prisma__ProductImagesClient<ProductImagesGetPayload<T>>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImages.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImagesWithIdOnly = await prisma.productImages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductImagesFindManyArgs>(
      args?: SelectSubset<T, ProductImagesFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductImagesGetPayload<T>>>

    /**
     * Create a ProductImages.
     * @param {ProductImagesCreateArgs} args - Arguments to create a ProductImages.
     * @example
     * // Create one ProductImages
     * const ProductImages = await prisma.productImages.create({
     *   data: {
     *     // ... data to create a ProductImages
     *   }
     * })
     * 
    **/
    create<T extends ProductImagesCreateArgs>(
      args: SelectSubset<T, ProductImagesCreateArgs>
    ): Prisma__ProductImagesClient<ProductImagesGetPayload<T>>

    /**
     * Create many ProductImages.
     *     @param {ProductImagesCreateManyArgs} args - Arguments to create many ProductImages.
     *     @example
     *     // Create many ProductImages
     *     const productImages = await prisma.productImages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductImagesCreateManyArgs>(
      args?: SelectSubset<T, ProductImagesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImages.
     * @param {ProductImagesDeleteArgs} args - Arguments to delete one ProductImages.
     * @example
     * // Delete one ProductImages
     * const ProductImages = await prisma.productImages.delete({
     *   where: {
     *     // ... filter to delete one ProductImages
     *   }
     * })
     * 
    **/
    delete<T extends ProductImagesDeleteArgs>(
      args: SelectSubset<T, ProductImagesDeleteArgs>
    ): Prisma__ProductImagesClient<ProductImagesGetPayload<T>>

    /**
     * Update one ProductImages.
     * @param {ProductImagesUpdateArgs} args - Arguments to update one ProductImages.
     * @example
     * // Update one ProductImages
     * const productImages = await prisma.productImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductImagesUpdateArgs>(
      args: SelectSubset<T, ProductImagesUpdateArgs>
    ): Prisma__ProductImagesClient<ProductImagesGetPayload<T>>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImagesDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductImagesDeleteManyArgs>(
      args?: SelectSubset<T, ProductImagesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImages = await prisma.productImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductImagesUpdateManyArgs>(
      args: SelectSubset<T, ProductImagesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImages.
     * @param {ProductImagesUpsertArgs} args - Arguments to update or create a ProductImages.
     * @example
     * // Update or create a ProductImages
     * const productImages = await prisma.productImages.upsert({
     *   create: {
     *     // ... data to create a ProductImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImages we want to update
     *   }
     * })
    **/
    upsert<T extends ProductImagesUpsertArgs>(
      args: SelectSubset<T, ProductImagesUpsertArgs>
    ): Prisma__ProductImagesClient<ProductImagesGetPayload<T>>

    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImages.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImagesCountArgs>(
      args?: Subset<T, ProductImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImagesAggregateArgs>(args: Subset<T, ProductImagesAggregateArgs>): Prisma.PrismaPromise<GetProductImagesAggregateType<T>>

    /**
     * Group by ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImagesGroupByArgs['orderBy'] }
        : { orderBy?: ProductImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductImagesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductImages base type for findUnique actions
   */
  export type ProductImagesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages findUnique
   */
  export interface ProductImagesFindUniqueArgs extends ProductImagesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductImages findUniqueOrThrow
   */
  export type ProductImagesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }


  /**
   * ProductImages base type for findFirst actions
   */
  export type ProductImagesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: Enumerable<ProductImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: Enumerable<ProductImagesScalarFieldEnum>
  }

  /**
   * ProductImages findFirst
   */
  export interface ProductImagesFindFirstArgs extends ProductImagesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductImages findFirstOrThrow
   */
  export type ProductImagesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: Enumerable<ProductImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: Enumerable<ProductImagesScalarFieldEnum>
  }


  /**
   * ProductImages findMany
   */
  export type ProductImagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: Enumerable<ProductImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: Enumerable<ProductImagesScalarFieldEnum>
  }


  /**
   * ProductImages create
   */
  export type ProductImagesCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * The data needed to create a ProductImages.
     */
    data: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
  }


  /**
   * ProductImages createMany
   */
  export type ProductImagesCreateManyArgs = {
    /**
     * The data used to create many ProductImages.
     */
    data: Enumerable<ProductImagesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductImages update
   */
  export type ProductImagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * The data needed to update a ProductImages.
     */
    data: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
    /**
     * Choose, which ProductImages to update.
     */
    where: ProductImagesWhereUniqueInput
  }


  /**
   * ProductImages updateMany
   */
  export type ProductImagesUpdateManyArgs = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImagesWhereInput
  }


  /**
   * ProductImages upsert
   */
  export type ProductImagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * The filter to search for the ProductImages to update in case it exists.
     */
    where: ProductImagesWhereUniqueInput
    /**
     * In case the ProductImages found by the `where` argument doesn't exist, create a new ProductImages with this data.
     */
    create: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
    /**
     * In case the ProductImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
  }


  /**
   * ProductImages delete
   */
  export type ProductImagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
    /**
     * Filter which ProductImages to delete.
     */
    where: ProductImagesWhereUniqueInput
  }


  /**
   * ProductImages deleteMany
   */
  export type ProductImagesDeleteManyArgs = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImagesWhereInput
  }


  /**
   * ProductImages without action
   */
  export type ProductImagesArgs = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CartItemScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    cart_id: 'cart_id',
    quantity: 'quantity'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    status: 'status'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    order_status: 'order_status',
    ordered_at: 'ordered_at',
    cart_id: 'cart_id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductGenreScalarFieldEnum: {
    product_id: 'product_id',
    genre_id: 'genre_id'
  };

  export type ProductGenreScalarFieldEnum = (typeof ProductGenreScalarFieldEnum)[keyof typeof ProductGenreScalarFieldEnum]


  export const ProductImagesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    image_url: 'image_url'
  };

  export type ProductImagesScalarFieldEnum = (typeof ProductImagesScalarFieldEnum)[keyof typeof ProductImagesScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductTypeScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type ProductTypeScalarFieldEnum = (typeof ProductTypeScalarFieldEnum)[keyof typeof ProductTypeScalarFieldEnum]


  export const PublisherScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    refresh_token: 'refresh_token',
    user_id: 'user_id'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    rating: 'rating',
    user_id: 'user_id',
    product_id: 'product_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    last_name: 'last_name',
    phone_number: 'phone_number',
    createdAt: 'createdAt',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
    last_name?: StringFilter | string
    phone_number?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    password?: StringFilter | string
    role?: EnumRoleFilter | Role
    refreshToken?: RefreshTokenListRelationFilter
    cart?: CartListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refreshToken?: RefreshTokenOrderByRelationAggregateInput
    cart?: CartOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    phone_number?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    password?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    page_number?: IntFilter | number
    title?: StringFilter | string
    publishing_date?: DateTimeFilter | Date | string
    is_selling?: BoolFilter | boolean
    price?: FloatFilter | number
    type_id?: IntFilter | number
    quantity?: IntFilter | number
    publisher_id?: IntFilter | number
    cartItem?: CartItemListRelationFilter
    genre?: ProductGenreListRelationFilter
    reviews?: ReviewListRelationFilter
    productImages?: ProductImagesListRelationFilter
    publisher?: XOR<PublisherRelationFilter, PublisherWhereInput>
    productType?: XOR<ProductTypeRelationFilter, ProductTypeWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    page_number?: SortOrder
    title?: SortOrder
    publishing_date?: SortOrder
    is_selling?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    quantity?: SortOrder
    publisher_id?: SortOrder
    cartItem?: CartItemOrderByRelationAggregateInput
    genre?: ProductGenreOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    productImages?: ProductImagesOrderByRelationAggregateInput
    publisher?: PublisherOrderByWithRelationInput
    productType?: ProductTypeOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = {
    id?: number
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    page_number?: SortOrder
    title?: SortOrder
    publishing_date?: SortOrder
    is_selling?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    quantity?: SortOrder
    publisher_id?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    page_number?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    publishing_date?: DateTimeWithAggregatesFilter | Date | string
    is_selling?: BoolWithAggregatesFilter | boolean
    price?: FloatWithAggregatesFilter | number
    type_id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    publisher_id?: IntWithAggregatesFilter | number
  }

  export type GenreWhereInput = {
    AND?: Enumerable<GenreWhereInput>
    OR?: Enumerable<GenreWhereInput>
    NOT?: Enumerable<GenreWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    products?: ProductGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<GenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GenreScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type ProductGenreWhereInput = {
    AND?: Enumerable<ProductGenreWhereInput>
    OR?: Enumerable<ProductGenreWhereInput>
    NOT?: Enumerable<ProductGenreWhereInput>
    product_id?: IntFilter | number
    genre_id?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
  }

  export type ProductGenreOrderByWithRelationInput = {
    product_id?: SortOrder
    genre_id?: SortOrder
    product?: ProductOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type ProductGenreWhereUniqueInput = {
    product_id_genre_id?: ProductGenreProduct_idGenre_idCompoundUniqueInput
  }

  export type ProductGenreOrderByWithAggregationInput = {
    product_id?: SortOrder
    genre_id?: SortOrder
    _count?: ProductGenreCountOrderByAggregateInput
    _avg?: ProductGenreAvgOrderByAggregateInput
    _max?: ProductGenreMaxOrderByAggregateInput
    _min?: ProductGenreMinOrderByAggregateInput
    _sum?: ProductGenreSumOrderByAggregateInput
  }

  export type ProductGenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductGenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductGenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductGenreScalarWhereWithAggregatesInput>
    product_id?: IntWithAggregatesFilter | number
    genre_id?: IntWithAggregatesFilter | number
  }

  export type ReviewWhereInput = {
    AND?: Enumerable<ReviewWhereInput>
    OR?: Enumerable<ReviewWhereInput>
    NOT?: Enumerable<ReviewWhereInput>
    id?: IntFilter | number
    comment?: StringFilter | string
    rating?: FloatFilter | number
    user_id?: IntFilter | number
    product_id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = {
    id?: number
  }

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    comment?: StringWithAggregatesFilter | string
    rating?: FloatWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
  }

  export type PublisherWhereInput = {
    AND?: Enumerable<PublisherWhereInput>
    OR?: Enumerable<PublisherWhereInput>
    NOT?: Enumerable<PublisherWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    product?: ProductListRelationFilter
  }

  export type PublisherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type PublisherWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type PublisherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PublisherCountOrderByAggregateInput
    _avg?: PublisherAvgOrderByAggregateInput
    _max?: PublisherMaxOrderByAggregateInput
    _min?: PublisherMinOrderByAggregateInput
    _sum?: PublisherSumOrderByAggregateInput
  }

  export type PublisherScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublisherScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublisherScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublisherScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: IntFilter | number
    order_status?: EnumOrderStatusFilter | OrderStatus
    ordered_at?: DateTimeFilter | Date | string
    cart_id?: IntFilter | number
    cart?: XOR<CartRelationFilter, CartWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    order_status?: SortOrder
    ordered_at?: SortOrder
    cart_id?: SortOrder
    cart?: CartOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = {
    id?: number
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    order_status?: SortOrder
    ordered_at?: SortOrder
    cart_id?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    order_status?: EnumOrderStatusWithAggregatesFilter | OrderStatus
    ordered_at?: DateTimeWithAggregatesFilter | Date | string
    cart_id?: IntWithAggregatesFilter | number
  }

  export type ProductTypeWhereInput = {
    AND?: Enumerable<ProductTypeWhereInput>
    OR?: Enumerable<ProductTypeWhereInput>
    NOT?: Enumerable<ProductTypeWhereInput>
    id?: IntFilter | number
    type?: StringFilter | string
    product?: ProductListRelationFilter
  }

  export type ProductTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type ProductTypeWhereUniqueInput = {
    id?: number
    type?: string
  }

  export type ProductTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: ProductTypeCountOrderByAggregateInput
    _avg?: ProductTypeAvgOrderByAggregateInput
    _max?: ProductTypeMaxOrderByAggregateInput
    _min?: ProductTypeMinOrderByAggregateInput
    _sum?: ProductTypeSumOrderByAggregateInput
  }

  export type ProductTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
  }

  export type CartWhereInput = {
    AND?: Enumerable<CartWhereInput>
    OR?: Enumerable<CartWhereInput>
    NOT?: Enumerable<CartWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    status?: EnumCartStatusFilter | CartStatus
    user?: XOR<UserRelationFilter, UserWhereInput>
    cartItems?: CartItemListRelationFilter
    order?: OrderListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    cartItems?: CartItemOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = {
    id?: number
  }

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CartScalarWhereWithAggregatesInput>
    OR?: Enumerable<CartScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CartScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    status?: EnumCartStatusWithAggregatesFilter | CartStatus
  }

  export type CartItemWhereInput = {
    AND?: Enumerable<CartItemWhereInput>
    OR?: Enumerable<CartItemWhereInput>
    NOT?: Enumerable<CartItemWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    cart_id?: IntFilter | number
    quantity?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    cart?: XOR<CartRelationFilter, CartWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    quantity?: SortOrder
    product?: ProductOrderByWithRelationInput
    cart?: CartOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = {
    id?: number
  }

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    quantity?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CartItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<CartItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CartItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    cart_id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
  }

  export type RefreshTokenWhereInput = {
    AND?: Enumerable<RefreshTokenWhereInput>
    OR?: Enumerable<RefreshTokenWhereInput>
    NOT?: Enumerable<RefreshTokenWhereInput>
    id?: IntFilter | number
    refresh_token?: StringFilter | string
    user_id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = {
    id?: number
  }

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    refresh_token?: StringWithAggregatesFilter | string
    user_id?: IntWithAggregatesFilter | number
  }

  export type ProductImagesWhereInput = {
    AND?: Enumerable<ProductImagesWhereInput>
    OR?: Enumerable<ProductImagesWhereInput>
    NOT?: Enumerable<ProductImagesWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    image_url?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductImagesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImagesWhereUniqueInput = {
    id?: number
  }

  export type ProductImagesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
    _count?: ProductImagesCountOrderByAggregateInput
    _avg?: ProductImagesAvgOrderByAggregateInput
    _max?: ProductImagesMaxOrderByAggregateInput
    _min?: ProductImagesMinOrderByAggregateInput
    _sum?: ProductImagesSumOrderByAggregateInput
  }

  export type ProductImagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductImagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductImagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductImagesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    image_url?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type ProductCreateInput = {
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    genre?: ProductGenreCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    productImages?: ProductImagesCreateNestedManyWithoutProductInput
    publisher: PublisherCreateNestedOneWithoutProductInput
    productType: ProductTypeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
    publisher_id: number
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    genre?: ProductGenreUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUpdateManyWithoutProductNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProductNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
    publisher_id: number
  }

  export type ProductUpdateManyMutationInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
  }

  export type GenreCreateInput = {
    name: string
    products?: ProductGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductGenreCreateInput = {
    product: ProductCreateNestedOneWithoutGenreInput
    genre: GenreCreateNestedOneWithoutProductsInput
  }

  export type ProductGenreUncheckedCreateInput = {
    product_id: number
    genre_id: number
  }

  export type ProductGenreUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutGenreNestedInput
    genre?: GenreUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductGenreUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGenreCreateManyInput = {
    product_id: number
    genre_id: number
  }

  export type ProductGenreUpdateManyMutationInput = {

  }

  export type ProductGenreUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    comment: string
    rating: number
    user: UserCreateNestedOneWithoutReviewsInput
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    comment: string
    rating: number
    user_id: number
    product_id: number
  }

  export type ReviewUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    comment: string
    rating: number
    user_id: number
    product_id: number
  }

  export type ReviewUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type PublisherCreateInput = {
    name: string
    product?: ProductCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUncheckedCreateInput = {
    id?: number
    name: string
    product?: ProductUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherCreateManyInput = {
    id?: number
    name: string
  }

  export type PublisherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    order_status?: OrderStatus
    ordered_at?: Date | string
    cart: CartCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    order_status?: OrderStatus
    ordered_at?: Date | string
    cart_id: number
  }

  export type OrderUpdateInput = {
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    ordered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    ordered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyInput = {
    id?: number
    order_status?: OrderStatus
    ordered_at?: Date | string
    cart_id: number
  }

  export type OrderUpdateManyMutationInput = {
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    ordered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    ordered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductTypeCreateInput = {
    type: string
    product?: ProductCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateInput = {
    id?: number
    type: string
    product?: ProductUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeCreateManyInput = {
    id?: number
    type: string
  }

  export type ProductTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ProductTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CartCreateInput = {
    status?: CartStatus
    user: UserCreateNestedOneWithoutCartInput
    cartItems?: CartItemCreateNestedManyWithoutCartInput
    order?: OrderCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    user_id: number
    status?: CartStatus
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput
    order?: OrderUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    user?: UserUpdateOneRequiredWithoutCartNestedInput
    cartItems?: CartItemUpdateManyWithoutCartNestedInput
    order?: OrderUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput
    order?: OrderUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    user_id: number
    status?: CartStatus
  }

  export type CartUpdateManyMutationInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
  }

  export type CartItemCreateInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutCartItemInput
    cart: CartCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: number
    product_id: number
    cart_id: number
    quantity: number
  }

  export type CartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyInput = {
    id?: number
    product_id: number
    cart_id: number
    quantity: number
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenCreateInput = {
    refresh_token: string
    user: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    refresh_token: string
    user_id: number
  }

  export type RefreshTokenUpdateInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    refresh_token: string
    user_id: number
  }

  export type RefreshTokenUpdateManyMutationInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImagesCreateInput = {
    image_url: string
    product: ProductCreateNestedOneWithoutProductImagesInput
  }

  export type ProductImagesUncheckedCreateInput = {
    id?: number
    product_id: number
    image_url: string
  }

  export type ProductImagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutProductImagesNestedInput
  }

  export type ProductImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesCreateManyInput = {
    id?: number
    product_id: number
    image_url: string
  }

  export type ProductImagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type ProductGenreListRelationFilter = {
    every?: ProductGenreWhereInput
    some?: ProductGenreWhereInput
    none?: ProductGenreWhereInput
  }

  export type ProductImagesListRelationFilter = {
    every?: ProductImagesWhereInput
    some?: ProductImagesWhereInput
    none?: ProductImagesWhereInput
  }

  export type PublisherRelationFilter = {
    is?: PublisherWhereInput
    isNot?: PublisherWhereInput
  }

  export type ProductTypeRelationFilter = {
    is?: ProductTypeWhereInput
    isNot?: ProductTypeWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    page_number?: SortOrder
    title?: SortOrder
    publishing_date?: SortOrder
    is_selling?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    quantity?: SortOrder
    publisher_id?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    page_number?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    quantity?: SortOrder
    publisher_id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    page_number?: SortOrder
    title?: SortOrder
    publishing_date?: SortOrder
    is_selling?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    quantity?: SortOrder
    publisher_id?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    page_number?: SortOrder
    title?: SortOrder
    publishing_date?: SortOrder
    is_selling?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    quantity?: SortOrder
    publisher_id?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    page_number?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    quantity?: SortOrder
    publisher_id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type ProductGenreProduct_idGenre_idCompoundUniqueInput = {
    product_id: number
    genre_id: number
  }

  export type ProductGenreCountOrderByAggregateInput = {
    product_id?: SortOrder
    genre_id?: SortOrder
  }

  export type ProductGenreAvgOrderByAggregateInput = {
    product_id?: SortOrder
    genre_id?: SortOrder
  }

  export type ProductGenreMaxOrderByAggregateInput = {
    product_id?: SortOrder
    genre_id?: SortOrder
  }

  export type ProductGenreMinOrderByAggregateInput = {
    product_id?: SortOrder
    genre_id?: SortOrder
  }

  export type ProductGenreSumOrderByAggregateInput = {
    product_id?: SortOrder
    genre_id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublisherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublisherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublisherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublisherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublisherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumOrderStatusFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusFilter | OrderStatus
  }

  export type CartRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    order_status?: SortOrder
    ordered_at?: SortOrder
    cart_id?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    order_status?: SortOrder
    ordered_at?: SortOrder
    cart_id?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    order_status?: SortOrder
    ordered_at?: SortOrder
    cart_id?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusWithAggregatesFilter | OrderStatus
    _count?: NestedIntFilter
    _min?: NestedEnumOrderStatusFilter
    _max?: NestedEnumOrderStatusFilter
  }

  export type ProductTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type ProductTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type ProductTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type ProductTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCartStatusFilter = {
    equals?: CartStatus
    in?: Enumerable<CartStatus>
    notIn?: Enumerable<CartStatus>
    not?: NestedEnumCartStatusFilter | CartStatus
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumCartStatusWithAggregatesFilter = {
    equals?: CartStatus
    in?: Enumerable<CartStatus>
    notIn?: Enumerable<CartStatus>
    not?: NestedEnumCartStatusWithAggregatesFilter | CartStatus
    _count?: NestedIntFilter
    _min?: NestedEnumCartStatusFilter
    _max?: NestedEnumCartStatusFilter
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    quantity?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ProductImagesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type ProductImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type ProductImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type ProductImagesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type ProductImagesSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type CartCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CartCreateWithoutUserInput>, Enumerable<CartUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutUserInput>
    createMany?: CartCreateManyUserInputEnvelope
    connect?: Enumerable<CartWhereUniqueInput>
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type CartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CartCreateWithoutUserInput>, Enumerable<CartUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutUserInput>
    createMany?: CartCreateManyUserInputEnvelope
    connect?: Enumerable<CartWhereUniqueInput>
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type CartUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CartCreateWithoutUserInput>, Enumerable<CartUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CartUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CartCreateManyUserInputEnvelope
    set?: Enumerable<CartWhereUniqueInput>
    disconnect?: Enumerable<CartWhereUniqueInput>
    delete?: Enumerable<CartWhereUniqueInput>
    connect?: Enumerable<CartWhereUniqueInput>
    update?: Enumerable<CartUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CartUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CartScalarWhereInput>
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type CartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CartCreateWithoutUserInput>, Enumerable<CartUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CartUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CartCreateManyUserInputEnvelope
    set?: Enumerable<CartWhereUniqueInput>
    disconnect?: Enumerable<CartWhereUniqueInput>
    delete?: Enumerable<CartWhereUniqueInput>
    connect?: Enumerable<CartWhereUniqueInput>
    update?: Enumerable<CartUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CartUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CartScalarWhereInput>
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type ProductGenreCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutProductInput>, Enumerable<ProductGenreUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutProductInput>
    createMany?: ProductGenreCreateManyProductInputEnvelope
    connect?: Enumerable<ProductGenreWhereUniqueInput>
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type ProductImagesCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductImagesCreateWithoutProductInput>, Enumerable<ProductImagesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImagesCreateOrConnectWithoutProductInput>
    createMany?: ProductImagesCreateManyProductInputEnvelope
    connect?: Enumerable<ProductImagesWhereUniqueInput>
  }

  export type PublisherCreateNestedOneWithoutProductInput = {
    create?: XOR<PublisherCreateWithoutProductInput, PublisherUncheckedCreateWithoutProductInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutProductInput
    connect?: PublisherWhereUniqueInput
  }

  export type ProductTypeCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutProductInput
    connect?: ProductTypeWhereUniqueInput
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type ProductGenreUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutProductInput>, Enumerable<ProductGenreUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutProductInput>
    createMany?: ProductGenreCreateManyProductInputEnvelope
    connect?: Enumerable<ProductGenreWhereUniqueInput>
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type ProductImagesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductImagesCreateWithoutProductInput>, Enumerable<ProductImagesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImagesCreateOrConnectWithoutProductInput>
    createMany?: ProductImagesCreateManyProductInputEnvelope
    connect?: Enumerable<ProductImagesWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type ProductGenreUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutProductInput>, Enumerable<ProductGenreUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductGenreUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductGenreCreateManyProductInputEnvelope
    set?: Enumerable<ProductGenreWhereUniqueInput>
    disconnect?: Enumerable<ProductGenreWhereUniqueInput>
    delete?: Enumerable<ProductGenreWhereUniqueInput>
    connect?: Enumerable<ProductGenreWhereUniqueInput>
    update?: Enumerable<ProductGenreUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductGenreUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductGenreScalarWhereInput>
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type ProductImagesUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductImagesCreateWithoutProductInput>, Enumerable<ProductImagesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImagesCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductImagesUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductImagesCreateManyProductInputEnvelope
    set?: Enumerable<ProductImagesWhereUniqueInput>
    disconnect?: Enumerable<ProductImagesWhereUniqueInput>
    delete?: Enumerable<ProductImagesWhereUniqueInput>
    connect?: Enumerable<ProductImagesWhereUniqueInput>
    update?: Enumerable<ProductImagesUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductImagesUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductImagesScalarWhereInput>
  }

  export type PublisherUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<PublisherCreateWithoutProductInput, PublisherUncheckedCreateWithoutProductInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutProductInput
    upsert?: PublisherUpsertWithoutProductInput
    connect?: PublisherWhereUniqueInput
    update?: XOR<PublisherUpdateWithoutProductInput, PublisherUncheckedUpdateWithoutProductInput>
  }

  export type ProductTypeUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutProductInput
    upsert?: ProductTypeUpsertWithoutProductInput
    connect?: ProductTypeWhereUniqueInput
    update?: XOR<ProductTypeUpdateWithoutProductInput, ProductTypeUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type ProductGenreUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutProductInput>, Enumerable<ProductGenreUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductGenreUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductGenreCreateManyProductInputEnvelope
    set?: Enumerable<ProductGenreWhereUniqueInput>
    disconnect?: Enumerable<ProductGenreWhereUniqueInput>
    delete?: Enumerable<ProductGenreWhereUniqueInput>
    connect?: Enumerable<ProductGenreWhereUniqueInput>
    update?: Enumerable<ProductGenreUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductGenreUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductGenreScalarWhereInput>
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductImagesCreateWithoutProductInput>, Enumerable<ProductImagesUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImagesCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductImagesUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductImagesCreateManyProductInputEnvelope
    set?: Enumerable<ProductImagesWhereUniqueInput>
    disconnect?: Enumerable<ProductImagesWhereUniqueInput>
    delete?: Enumerable<ProductImagesWhereUniqueInput>
    connect?: Enumerable<ProductImagesWhereUniqueInput>
    update?: Enumerable<ProductImagesUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductImagesUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductImagesScalarWhereInput>
  }

  export type ProductGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutGenreInput>, Enumerable<ProductGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutGenreInput>
    createMany?: ProductGenreCreateManyGenreInputEnvelope
    connect?: Enumerable<ProductGenreWhereUniqueInput>
  }

  export type ProductGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutGenreInput>, Enumerable<ProductGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutGenreInput>
    createMany?: ProductGenreCreateManyGenreInputEnvelope
    connect?: Enumerable<ProductGenreWhereUniqueInput>
  }

  export type ProductGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutGenreInput>, Enumerable<ProductGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<ProductGenreUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: ProductGenreCreateManyGenreInputEnvelope
    set?: Enumerable<ProductGenreWhereUniqueInput>
    disconnect?: Enumerable<ProductGenreWhereUniqueInput>
    delete?: Enumerable<ProductGenreWhereUniqueInput>
    connect?: Enumerable<ProductGenreWhereUniqueInput>
    update?: Enumerable<ProductGenreUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<ProductGenreUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<ProductGenreScalarWhereInput>
  }

  export type ProductGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<ProductGenreCreateWithoutGenreInput>, Enumerable<ProductGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ProductGenreCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<ProductGenreUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: ProductGenreCreateManyGenreInputEnvelope
    set?: Enumerable<ProductGenreWhereUniqueInput>
    disconnect?: Enumerable<ProductGenreWhereUniqueInput>
    delete?: Enumerable<ProductGenreWhereUniqueInput>
    connect?: Enumerable<ProductGenreWhereUniqueInput>
    update?: Enumerable<ProductGenreUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<ProductGenreUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<ProductGenreScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutGenreInput = {
    create?: XOR<ProductCreateWithoutGenreInput, ProductUncheckedCreateWithoutGenreInput>
    connectOrCreate?: ProductCreateOrConnectWithoutGenreInput
    connect?: ProductWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutProductsInput = {
    create?: XOR<GenreCreateWithoutProductsInput, GenreUncheckedCreateWithoutProductsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutProductsInput
    connect?: GenreWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutGenreNestedInput = {
    create?: XOR<ProductCreateWithoutGenreInput, ProductUncheckedCreateWithoutGenreInput>
    connectOrCreate?: ProductCreateOrConnectWithoutGenreInput
    upsert?: ProductUpsertWithoutGenreInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutGenreInput, ProductUncheckedUpdateWithoutGenreInput>
  }

  export type GenreUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<GenreCreateWithoutProductsInput, GenreUncheckedCreateWithoutProductsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutProductsInput
    upsert?: GenreUpsertWithoutProductsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<GenreUpdateWithoutProductsInput, GenreUncheckedUpdateWithoutProductsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductCreateNestedManyWithoutPublisherInput = {
    create?: XOR<Enumerable<ProductCreateWithoutPublisherInput>, Enumerable<ProductUncheckedCreateWithoutPublisherInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutPublisherInput>
    createMany?: ProductCreateManyPublisherInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<Enumerable<ProductCreateWithoutPublisherInput>, Enumerable<ProductUncheckedCreateWithoutPublisherInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutPublisherInput>
    createMany?: ProductCreateManyPublisherInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutPublisherInput>, Enumerable<ProductUncheckedCreateWithoutPublisherInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutPublisherInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutPublisherInput>
    createMany?: ProductCreateManyPublisherInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutPublisherInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutPublisherInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutPublisherInput>, Enumerable<ProductUncheckedCreateWithoutPublisherInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutPublisherInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutPublisherInput>
    createMany?: ProductCreateManyPublisherInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutPublisherInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutPublisherInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CartCreateNestedOneWithoutOrderInput = {
    create?: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CartCreateOrConnectWithoutOrderInput
    connect?: CartWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: OrderStatus
  }

  export type CartUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CartCreateOrConnectWithoutOrderInput
    upsert?: CartUpsertWithoutOrderInput
    connect?: CartWhereUniqueInput
    update?: XOR<CartUpdateWithoutOrderInput, CartUncheckedUpdateWithoutOrderInput>
  }

  export type ProductCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProductTypeInput>, Enumerable<ProductUncheckedCreateWithoutProductTypeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProductTypeInput>
    createMany?: ProductCreateManyProductTypeInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProductTypeInput>, Enumerable<ProductUncheckedCreateWithoutProductTypeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProductTypeInput>
    createMany?: ProductCreateManyProductTypeInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProductTypeInput>, Enumerable<ProductUncheckedCreateWithoutProductTypeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProductTypeInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutProductTypeInput>
    createMany?: ProductCreateManyProductTypeInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutProductTypeInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutProductTypeInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutProductTypeInput>, Enumerable<ProductUncheckedCreateWithoutProductTypeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutProductTypeInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutProductTypeInput>
    createMany?: ProductCreateManyProductTypeInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutProductTypeInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutProductTypeInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type OrderCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCartInput>, Enumerable<OrderUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCartInput>
    createMany?: OrderCreateManyCartInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCartInput>, Enumerable<OrderUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCartInput>
    createMany?: OrderCreateManyCartInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type EnumCartStatusFieldUpdateOperationsInput = {
    set?: CartStatus
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutCartInput>
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type OrderUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCartInput>, Enumerable<OrderUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCartInput>
    createMany?: OrderCreateManyCartInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutCartInput>
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCartInput>, Enumerable<OrderUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCartInput>
    createMany?: OrderCreateManyCartInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput
    connect?: ProductWhereUniqueInput
  }

  export type CartCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    connect?: CartWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput
    upsert?: ProductUpsertWithoutCartItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
  }

  export type CartUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    upsert?: CartUpsertWithoutCartItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type ProductCreateNestedOneWithoutProductImagesInput = {
    create?: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductImagesNestedInput = {
    create?: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImagesInput
    upsert?: ProductUpsertWithoutProductImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutProductImagesInput, ProductUncheckedUpdateWithoutProductImagesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumOrderStatusFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusFilter | OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusWithAggregatesFilter | OrderStatus
    _count?: NestedIntFilter
    _min?: NestedEnumOrderStatusFilter
    _max?: NestedEnumOrderStatusFilter
  }

  export type NestedEnumCartStatusFilter = {
    equals?: CartStatus
    in?: Enumerable<CartStatus>
    notIn?: Enumerable<CartStatus>
    not?: NestedEnumCartStatusFilter | CartStatus
  }

  export type NestedEnumCartStatusWithAggregatesFilter = {
    equals?: CartStatus
    in?: Enumerable<CartStatus>
    notIn?: Enumerable<CartStatus>
    not?: NestedEnumCartStatusWithAggregatesFilter | CartStatus
    _count?: NestedIntFilter
    _min?: NestedEnumCartStatusFilter
    _max?: NestedEnumCartStatusFilter
  }

  export type RefreshTokenCreateWithoutUserInput = {
    refresh_token: string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    refresh_token: string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: Enumerable<RefreshTokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutUserInput = {
    status?: CartStatus
    cartItems?: CartItemCreateNestedManyWithoutCartInput
    order?: OrderCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number
    status?: CartStatus
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput
    order?: OrderUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartCreateManyUserInputEnvelope = {
    data: Enumerable<CartCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    comment: string
    rating: number
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    rating: number
    product_id: number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: Enumerable<ReviewCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutRefreshTokenInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: Enumerable<RefreshTokenScalarWhereInput>
    OR?: Enumerable<RefreshTokenScalarWhereInput>
    NOT?: Enumerable<RefreshTokenScalarWhereInput>
    id?: IntFilter | number
    refresh_token?: StringFilter | string
    user_id?: IntFilter | number
  }

  export type CartUpsertWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithWhereWithoutUserInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutCartInput>
  }

  export type CartScalarWhereInput = {
    AND?: Enumerable<CartScalarWhereInput>
    OR?: Enumerable<CartScalarWhereInput>
    NOT?: Enumerable<CartScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    status?: EnumCartStatusFilter | CartStatus
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: Enumerable<ReviewScalarWhereInput>
    OR?: Enumerable<ReviewScalarWhereInput>
    NOT?: Enumerable<ReviewScalarWhereInput>
    id?: IntFilter | number
    comment?: StringFilter | string
    rating?: FloatFilter | number
    user_id?: IntFilter | number
    product_id?: IntFilter | number
  }

  export type CartItemCreateWithoutProductInput = {
    quantity: number
    cart: CartCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: number
    cart_id: number
    quantity: number
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: Enumerable<CartItemCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductGenreCreateWithoutProductInput = {
    genre: GenreCreateNestedOneWithoutProductsInput
  }

  export type ProductGenreUncheckedCreateWithoutProductInput = {
    genre_id: number
  }

  export type ProductGenreCreateOrConnectWithoutProductInput = {
    where: ProductGenreWhereUniqueInput
    create: XOR<ProductGenreCreateWithoutProductInput, ProductGenreUncheckedCreateWithoutProductInput>
  }

  export type ProductGenreCreateManyProductInputEnvelope = {
    data: Enumerable<ProductGenreCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutProductInput = {
    comment: string
    rating: number
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: number
    comment: string
    rating: number
    user_id: number
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: Enumerable<ReviewCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductImagesCreateWithoutProductInput = {
    image_url: string
  }

  export type ProductImagesUncheckedCreateWithoutProductInput = {
    id?: number
    image_url: string
  }

  export type ProductImagesCreateOrConnectWithoutProductInput = {
    where: ProductImagesWhereUniqueInput
    create: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput>
  }

  export type ProductImagesCreateManyProductInputEnvelope = {
    data: Enumerable<ProductImagesCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type PublisherCreateWithoutProductInput = {
    name: string
  }

  export type PublisherUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
  }

  export type PublisherCreateOrConnectWithoutProductInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutProductInput, PublisherUncheckedCreateWithoutProductInput>
  }

  export type ProductTypeCreateWithoutProductInput = {
    type: string
  }

  export type ProductTypeUncheckedCreateWithoutProductInput = {
    id?: number
    type: string
  }

  export type ProductTypeCreateOrConnectWithoutProductInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartItemInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: Enumerable<CartItemScalarWhereInput>
    OR?: Enumerable<CartItemScalarWhereInput>
    NOT?: Enumerable<CartItemScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    cart_id?: IntFilter | number
    quantity?: IntFilter | number
  }

  export type ProductGenreUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductGenreWhereUniqueInput
    update: XOR<ProductGenreUpdateWithoutProductInput, ProductGenreUncheckedUpdateWithoutProductInput>
    create: XOR<ProductGenreCreateWithoutProductInput, ProductGenreUncheckedCreateWithoutProductInput>
  }

  export type ProductGenreUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductGenreWhereUniqueInput
    data: XOR<ProductGenreUpdateWithoutProductInput, ProductGenreUncheckedUpdateWithoutProductInput>
  }

  export type ProductGenreUpdateManyWithWhereWithoutProductInput = {
    where: ProductGenreScalarWhereInput
    data: XOR<ProductGenreUpdateManyMutationInput, ProductGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type ProductGenreScalarWhereInput = {
    AND?: Enumerable<ProductGenreScalarWhereInput>
    OR?: Enumerable<ProductGenreScalarWhereInput>
    NOT?: Enumerable<ProductGenreScalarWhereInput>
    product_id?: IntFilter | number
    genre_id?: IntFilter | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ProductImagesUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImagesWhereUniqueInput
    update: XOR<ProductImagesUpdateWithoutProductInput, ProductImagesUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput>
  }

  export type ProductImagesUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImagesWhereUniqueInput
    data: XOR<ProductImagesUpdateWithoutProductInput, ProductImagesUncheckedUpdateWithoutProductInput>
  }

  export type ProductImagesUpdateManyWithWhereWithoutProductInput = {
    where: ProductImagesScalarWhereInput
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyWithoutProductImagesInput>
  }

  export type ProductImagesScalarWhereInput = {
    AND?: Enumerable<ProductImagesScalarWhereInput>
    OR?: Enumerable<ProductImagesScalarWhereInput>
    NOT?: Enumerable<ProductImagesScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    image_url?: StringFilter | string
  }

  export type PublisherUpsertWithoutProductInput = {
    update: XOR<PublisherUpdateWithoutProductInput, PublisherUncheckedUpdateWithoutProductInput>
    create: XOR<PublisherCreateWithoutProductInput, PublisherUncheckedCreateWithoutProductInput>
  }

  export type PublisherUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductTypeUpsertWithoutProductInput = {
    update: XOR<ProductTypeUpdateWithoutProductInput, ProductTypeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
  }

  export type ProductTypeUpdateWithoutProductInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ProductTypeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ProductGenreCreateWithoutGenreInput = {
    product: ProductCreateNestedOneWithoutGenreInput
  }

  export type ProductGenreUncheckedCreateWithoutGenreInput = {
    product_id: number
  }

  export type ProductGenreCreateOrConnectWithoutGenreInput = {
    where: ProductGenreWhereUniqueInput
    create: XOR<ProductGenreCreateWithoutGenreInput, ProductGenreUncheckedCreateWithoutGenreInput>
  }

  export type ProductGenreCreateManyGenreInputEnvelope = {
    data: Enumerable<ProductGenreCreateManyGenreInput>
    skipDuplicates?: boolean
  }

  export type ProductGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: ProductGenreWhereUniqueInput
    update: XOR<ProductGenreUpdateWithoutGenreInput, ProductGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<ProductGenreCreateWithoutGenreInput, ProductGenreUncheckedCreateWithoutGenreInput>
  }

  export type ProductGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: ProductGenreWhereUniqueInput
    data: XOR<ProductGenreUpdateWithoutGenreInput, ProductGenreUncheckedUpdateWithoutGenreInput>
  }

  export type ProductGenreUpdateManyWithWhereWithoutGenreInput = {
    where: ProductGenreScalarWhereInput
    data: XOR<ProductGenreUpdateManyMutationInput, ProductGenreUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductCreateWithoutGenreInput = {
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    productImages?: ProductImagesCreateNestedManyWithoutProductInput
    publisher: PublisherCreateNestedOneWithoutProductInput
    productType: ProductTypeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutGenreInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
    publisher_id: number
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutGenreInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutGenreInput, ProductUncheckedCreateWithoutGenreInput>
  }

  export type GenreCreateWithoutProductsInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutProductsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutProductsInput, GenreUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutGenreInput = {
    update: XOR<ProductUpdateWithoutGenreInput, ProductUncheckedUpdateWithoutGenreInput>
    create: XOR<ProductCreateWithoutGenreInput, ProductUncheckedCreateWithoutGenreInput>
  }

  export type ProductUpdateWithoutGenreInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUpdateManyWithoutProductNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProductNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type GenreUpsertWithoutProductsInput = {
    update: XOR<GenreUpdateWithoutProductsInput, GenreUncheckedUpdateWithoutProductsInput>
    create: XOR<GenreCreateWithoutProductsInput, GenreUncheckedCreateWithoutProductsInput>
  }

  export type GenreUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    genre?: ProductGenreCreateNestedManyWithoutProductInput
    productImages?: ProductImagesCreateNestedManyWithoutProductInput
    publisher: PublisherCreateNestedOneWithoutProductInput
    productType: ProductTypeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
    publisher_id: number
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    genre?: ProductGenreUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUpdateManyWithoutProductNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProductNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutPublisherInput = {
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    genre?: ProductGenreCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    productImages?: ProductImagesCreateNestedManyWithoutProductInput
    productType: ProductTypeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPublisherInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    genre?: ProductGenreUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPublisherInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPublisherInput, ProductUncheckedCreateWithoutPublisherInput>
  }

  export type ProductCreateManyPublisherInputEnvelope = {
    data: Enumerable<ProductCreateManyPublisherInput>
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutPublisherInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutPublisherInput, ProductUncheckedUpdateWithoutPublisherInput>
    create: XOR<ProductCreateWithoutPublisherInput, ProductUncheckedCreateWithoutPublisherInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutPublisherInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutPublisherInput, ProductUncheckedUpdateWithoutPublisherInput>
  }

  export type ProductUpdateManyWithWhereWithoutPublisherInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: IntFilter | number
    page_number?: IntFilter | number
    title?: StringFilter | string
    publishing_date?: DateTimeFilter | Date | string
    is_selling?: BoolFilter | boolean
    price?: FloatFilter | number
    type_id?: IntFilter | number
    quantity?: IntFilter | number
    publisher_id?: IntFilter | number
  }

  export type CartCreateWithoutOrderInput = {
    status?: CartStatus
    user: UserCreateNestedOneWithoutCartInput
    cartItems?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutOrderInput = {
    id?: number
    user_id: number
    status?: CartStatus
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutOrderInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput>
  }

  export type CartUpsertWithoutOrderInput = {
    update: XOR<CartUpdateWithoutOrderInput, CartUncheckedUpdateWithoutOrderInput>
    create: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput>
  }

  export type CartUpdateWithoutOrderInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    user?: UserUpdateOneRequiredWithoutCartNestedInput
    cartItems?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type ProductCreateWithoutProductTypeInput = {
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    genre?: ProductGenreCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    productImages?: ProductImagesCreateNestedManyWithoutProductInput
    publisher: PublisherCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductTypeInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    publisher_id: number
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    genre?: ProductGenreUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductTypeInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput>
  }

  export type ProductCreateManyProductTypeInputEnvelope = {
    data: Enumerable<ProductCreateManyProductTypeInput>
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutProductTypeInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProductTypeInput, ProductUncheckedUpdateWithoutProductTypeInput>
    create: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProductTypeInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProductTypeInput, ProductUncheckedUpdateWithoutProductTypeInput>
  }

  export type ProductUpdateManyWithWhereWithoutProductTypeInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutCartInput = {
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: number
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: number
    product_id: number
    quantity: number
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: Enumerable<CartItemCreateManyCartInput>
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCartInput = {
    order_status?: OrderStatus
    ordered_at?: Date | string
  }

  export type OrderUncheckedCreateWithoutCartInput = {
    id?: number
    order_status?: OrderStatus
    ordered_at?: Date | string
  }

  export type OrderCreateOrConnectWithoutCartInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput>
  }

  export type OrderCreateManyCartInputEnvelope = {
    data: Enumerable<OrderCreateManyCartInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartItemsInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCartInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCartInput, OrderUncheckedUpdateWithoutCartInput>
    create: XOR<OrderCreateWithoutCartInput, OrderUncheckedCreateWithoutCartInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCartInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCartInput, OrderUncheckedUpdateWithoutCartInput>
  }

  export type OrderUpdateManyWithWhereWithoutCartInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderScalarWhereInput = {
    AND?: Enumerable<OrderScalarWhereInput>
    OR?: Enumerable<OrderScalarWhereInput>
    NOT?: Enumerable<OrderScalarWhereInput>
    id?: IntFilter | number
    order_status?: EnumOrderStatusFilter | OrderStatus
    ordered_at?: DateTimeFilter | Date | string
    cart_id?: IntFilter | number
  }

  export type ProductCreateWithoutCartItemInput = {
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    genre?: ProductGenreCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    productImages?: ProductImagesCreateNestedManyWithoutProductInput
    publisher: PublisherCreateNestedOneWithoutProductInput
    productType: ProductTypeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartItemInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
    publisher_id: number
    genre?: ProductGenreUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
  }

  export type CartCreateWithoutCartItemsInput = {
    status?: CartStatus
    user: UserCreateNestedOneWithoutCartInput
    order?: OrderCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCartItemsInput = {
    id?: number
    user_id: number
    status?: CartStatus
    order?: OrderUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCartItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
  }

  export type ProductUpsertWithoutCartItemInput = {
    update: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
  }

  export type ProductUpdateWithoutCartItemInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    genre?: ProductGenreUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUpdateManyWithoutProductNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProductNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    genre?: ProductGenreUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartUpsertWithoutCartItemsInput = {
    update: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpdateWithoutCartItemsInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    user?: UserUpdateOneRequiredWithoutCartNestedInput
    order?: OrderUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    order?: OrderUncheckedUpdateManyWithoutCartNestedInput
  }

  export type UserCreateWithoutRefreshTokenInput = {
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    cart?: CartCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: number
    email: string
    name: string
    last_name: string
    phone_number: string
    createdAt?: Date | string
    password: string
    role?: Role
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    cart?: CartUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutProductImagesInput = {
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    genre?: ProductGenreCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    publisher: PublisherCreateNestedOneWithoutProductInput
    productType: ProductTypeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductImagesInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
    publisher_id: number
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    genre?: ProductGenreUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
  }

  export type ProductUpsertWithoutProductImagesInput = {
    update: XOR<ProductUpdateWithoutProductImagesInput, ProductUncheckedUpdateWithoutProductImagesInput>
    create: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
  }

  export type ProductUpdateWithoutProductImagesInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProductNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: number
    refresh_token: string
  }

  export type CartCreateManyUserInput = {
    id?: number
    status?: CartStatus
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    comment: string
    rating: number
    product_id: number
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutRefreshTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
  }

  export type CartUpdateWithoutUserInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    cartItems?: CartItemUpdateManyWithoutCartNestedInput
    order?: OrderUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput
    order?: OrderUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | CartStatus
  }

  export type ReviewUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyProductInput = {
    id?: number
    cart_id: number
    quantity: number
  }

  export type ProductGenreCreateManyProductInput = {
    genre_id: number
  }

  export type ReviewCreateManyProductInput = {
    id?: number
    comment: string
    rating: number
    user_id: number
  }

  export type ProductImagesCreateManyProductInput = {
    id?: number
    image_url: string
  }

  export type CartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGenreUpdateWithoutProductInput = {
    genre?: GenreUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductGenreUncheckedUpdateWithoutProductInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGenreUncheckedUpdateManyWithoutGenreInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutProductInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImagesUpdateWithoutProductInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductGenreCreateManyGenreInput = {
    product_id: number
  }

  export type ProductGenreUpdateWithoutGenreInput = {
    product?: ProductUpdateOneRequiredWithoutGenreNestedInput
  }

  export type ProductGenreUncheckedUpdateWithoutGenreInput = {
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGenreUncheckedUpdateManyWithoutProductsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyPublisherInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    type_id: number
    quantity: number
  }

  export type ProductUpdateWithoutPublisherInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUpdateManyWithoutProductNestedInput
    productType?: ProductTypeUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPublisherInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyProductTypeInput = {
    id?: number
    page_number: number
    title: string
    publishing_date: Date | string
    is_selling?: boolean
    price: number
    quantity: number
    publisher_id: number
  }

  export type ProductUpdateWithoutProductTypeInput = {
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUpdateManyWithoutProductNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    page_number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_selling?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    genre?: ProductGenreUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartItemCreateManyCartInput = {
    id?: number
    product_id: number
    quantity: number
  }

  export type OrderCreateManyCartInput = {
    id?: number
    order_status?: OrderStatus
    ordered_at?: Date | string
  }

  export type CartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutCartInput = {
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    ordered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    ordered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    ordered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
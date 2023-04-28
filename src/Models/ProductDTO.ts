import { Exclude, Expose, Type } from "class-transformer";
export class ProductDTO {
  @Exclude()
  is_selling!: boolean;
  @Expose()
  id!: number;
  @Expose()
  title!: string;
  @Expose()
  price!: number;
  @Expose()
  quantity!: number;
  @Expose()
  page_number!: number;
  @Expose()
  publishing_date!: string;
  @Expose()
  productImages!: object;
  @Expose()
  productType!: object;
  @Expose()
  genre!: object;
  @Expose()
  image_url!: string;
  @Expose()
  avgRating!: number;
  @Expose()
  sale!: object;
  @Expose()
  author!: object;
  @Expose()
  description!: string;
  @Expose()
  publisher!: object;
}

import { Exclude, Expose } from "class-transformer";
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
  type_id!: number;
  @Expose()
  quantity!: number;
  @Exclude()
  publisher_id!: number;
  @Expose()
  page_number!: number;
  @Expose()
  publishing_date!: string;
  @Expose()
  publisher!: object;
}

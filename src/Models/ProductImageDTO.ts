import { Exclude, Expose } from "class-transformer";

class ProductImageDTO {
  @Exclude()
  id!: number;
  @Exclude()
  product_id!: number;
  @Expose()
  img_url!: string;
}
export default ProductImageDTO;

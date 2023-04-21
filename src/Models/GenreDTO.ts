import { Expose } from "class-transformer";
export class GenreDTO {
  @Expose()
  id!: number;
  @Expose()
  genre!: string;
}

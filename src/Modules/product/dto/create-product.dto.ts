import { IsInt, IsString } from 'class-validator';
export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsInt()
  stock: number;
  @IsInt()
  warehouseId: number;
}

import {
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(4, 20, { message: 'name must be more than 3 and less than 21' })
  name: string;
  @IsString()
  descripion: string;
  @IsNumber()
  stock: string;
  @IsNumber()
  warehouseId: number;
}

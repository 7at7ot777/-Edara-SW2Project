import { IsBoolean, IsString, Length } from 'class-validator';

export class CreateWarehouseDto {
  isActive?: boolean;
  @IsString()
  @Length(4, 20, { message: 'name must be more than 3 and less than 21' })
  name: string;
  @IsString()
  @Length(4, 15, { message: 'location must be more than 3 and less than 15' })
  location: string;
}

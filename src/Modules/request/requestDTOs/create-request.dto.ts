import { IsBoolean, IsInt } from 'class-validator';

export class CreateRequestDto {
  @IsInt()
  userId: number;
  @IsInt()
  productId: number;
  @IsInt()
  shippingCompanyId: number;
  @IsInt()
  quantity: number;
  @IsBoolean()
  isActive: boolean;
  @IsBoolean()
  isIncrease: boolean;
  @IsBoolean()
  isAccepted: boolean;
}

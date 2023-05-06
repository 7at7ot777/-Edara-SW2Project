import { IsEmail, IsEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(4, 20, { message: 'name must be more than 3 and less than 21' })
  name: string;
  @IsString()
  @Length(10, 15, {
    message: 'phone must be from 10 to 15 number',
    groups: ['create'],
  })
  phone: string;
  @IsEmail({}, { message: 'Invalid Email', groups: ['create'] })
  email: string;

  @Length(5, 25, {
    message: `Password musn't be less than 5 and more than 25`,
    groups: ['create'],
  })
  password: string;
  @IsNumber()
  warehouseId?: number;
}

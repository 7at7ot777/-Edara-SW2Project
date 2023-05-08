import { IsEmail, IsString, Length } from "class-validator";

export class LoginDto {
  @IsEmail({}, { message: 'Invalid Email' })
  email: string;
  @IsString()
  password: string;
}

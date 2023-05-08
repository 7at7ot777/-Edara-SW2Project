import { IsEmail, Length } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Invalid Email' })
  email: string;
  //Length(5, 25, { message: `Password musn't be less than 5 and more than 25` })
  //password: string;
}

import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  Headers,
} from '@nestjs/common';
import { LoginDto } from './UserDTOs/login.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('login')
  login(@Body(ValidationPipe) loginCred: LoginDto) {
    return this.userService.login(loginCred);
  }

  @Post('logout')
  logout(@Headers('token') token: string) {
    return this.userService.logout(token);
  }
}

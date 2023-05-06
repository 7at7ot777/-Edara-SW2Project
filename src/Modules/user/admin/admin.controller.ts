import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  Headers,
  Put,
  Param,
  ParseIntPipe,
  Get,
} from '@nestjs/common';
import { CreateUserDto } from './AdminDTOs/create-user.dto';
import { AdminService } from './admin.service';
import { UpdateUserDto } from './AdminDTOs/update-user.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Post('addUser')
  async addUser(
    @Headers('token') token: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createUserDto: CreateUserDto,
  ) {
    return this.adminService.addUser(token, createUserDto);
  }
  @Put('updateUser/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Headers('token') token: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    updateUserDto: UpdateUserDto,
  ) {
    console.log(id);
    return this.adminService.updateUser(token, updateUserDto, id);
  }
  // eslint-disable-next-line prettier/prettier
  @Get('getUser/:id')
  getUser(@Param('id') id: number) {
    this.adminService.getUser(id);
  }
}

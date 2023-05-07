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
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './AdminDTOs/create-user.dto';
import { AdminService } from './admin.service';
import { UpdateUserDto } from './AdminDTOs/update-user.dto';
import { User } from '../../../../entities/User';
import { Warehouse } from '../../../../entities/Warehouse';
import { Product } from '../../../../entities/Product';
import { Repository } from 'typeorm';
import { Model } from '../../../../entities/Model';

@Controller('admin')
export class AdminController {
  productRepo: Repository<Product>;
  warehousetRepo: Repository<Warehouse>;
  userRepo: Repository<User>;

  constructor(private adminService: AdminService) {}
  @Post('addUser')
  async addUser(
    @Headers('token') token: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createUserDto: CreateUserDto,
    warehouseId: number,
  ) {
    return this.adminService.addUser(token, createUserDto, warehouseId);
  }
  @Put('updateUser/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Headers('token') token: string,
    @Body(ValidationPipe)
    updateUserDto: UpdateUserDto,
  ) {
    return this.adminService.updateUser(token, updateUserDto, id);
  }
  // eslint-disable-next-line prettier/prettier
  @Get('getUser/:id')
  getUser(@Param('id') id: number) {
    return this.adminService.getUser(id);
  }
  @Get('getAllUsers')
  getAllUsers() {
    return this.adminService.getAllUsers();
  }
  @Delete('deleteUser/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteUser(id);
  }
  @Get('dependencyInjection')
  async test() {
    this.adminService.setModel(this.productRepo);
    const products = await this.adminService.modelRepository.find();
    this.adminService.setModel(this.userRepo);
    const warehouses = await this.adminService.modelRepository.find();
    console.log(
      `data retrived using dependency injection : products = ${products}, | warehouses = ${warehouses}`,
    );
    return `data retrived using dependency injection : products = ${products}, | warehouses = ${warehouses}`;
  }
}

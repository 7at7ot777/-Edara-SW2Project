import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from './AdminDTOs/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../entities/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './AdminDTOs/update-user.dto';
import { Warehouse } from '../../../../entities/Warehouse';
import { Model } from '../../../../entities/Model';
import { Product } from '../../../../entities/Product';


@Injectable()
export class AdminService extends UserService {
  salt = 10;
  public modelRepository= new Repository<Model>({},);

  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
    @InjectRepository(Model)
    public modelRepository: Repository<T extends Model<T>>,
  ) {
    super(usersRepository);

  }
  async addUser(token: string, createUserDto: CreateUserDto, warehouseId) {
    const newUser = this.usersRepository.create(createUserDto);
    newUser.password = await bcrypt.hash(newUser.password, this.salt);

    await this.usersRepository.save(newUser);
    return { message: 'user is added successfully', code: 200 };
  }
  async updateUser(token: string, updateUserDto: UpdateUserDto, id) {
    //return typeof updateUserDto.password;

    const user = await this.usersRepository.findOneBy({ id });
    await this.UpdateData(user, updateUserDto);
    await this.usersRepository.save(user);
    return { message: 'Data Updated Successfully', code: 400 };
  }
  async UpdateData(user: User, data: UpdateUserDto) {
    if (data.name != '' && data.name !== null) {
      user.name = data.name;
    }
    if (data.email != '' && data.email !== null) {
      user.email = data.email;
    }
    if (data.phone != '' && data.phone !== null) {
      user.phone = data.phone;
    }
    if (data.password != '' && data.password != null) {
      user.password = await bcrypt.hash(data.password, this.salt);
    }
    /* if (data.warehouseId != null) {
      const warehouse = await this.warehouseRepository.findOneBy({
        id: data.warehouseId,
      });
      if (warehouse) {
        user.warehouse = warehouse;
      }
    }*/
    await this.usersRepository.save(user);
  }
  async getUser(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      delete user.password;
      delete user.token;
      return user;
    }
    return { message: 'User Not Found', code: 404 };
  }

  async getAllUsers() {
    const users = await this.usersRepository.find();
    users.forEach((user) => {
      delete user.password;
      delete user.token;
    });
    return users;
  }

  async deleteUser(id) {
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      await this.usersRepository.delete(user);
      return { message: 'user is deleted succesfully', code: 200 };
    }
    return { message: 'User not found', code: 404 };
  }
  async test() {
    this.modelRepository.find();
  }
  setModel(model: Repository<Model>) {
    this.modelRepository = model;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './UserDTOs/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../entities/User';
import { Repository } from 'typeorm';
//import { crypto } from 'crypto';
const crypto = require('crypto');
import * as bcrypt from 'bcrypt';
import { Warehouse } from '../../../entities/Warehouse';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Warehouse)
    private warehouseRepository: Repository<Warehouse>,
  ) {}

  async login(loginCred: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: loginCred.email,
      },
      relations: { warehouse: true },
    });
    console.log(user);
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    if (!(await bcrypt.compare(loginCred.password, user.password))) {
      return { message: 'incorrect Password' };
    } else {
      //return {token: user.token };
      user.token = crypto.randomBytes(16).toString('hex');
      user.isActive = true;
      const warehouse = await this.getWarehouse(user.id);
      await this.userRepository.save(user);
      //      delete user.password;
      // await this.userRepository.save(user);
      return { user: user };
    }
  }

  async logout(token: string) {
    console.log(await this.isAdmin(token));
    const user = await this.findUserByToken(token);
    if (user instanceof User) {
      user.token = null;
      user.isActive = false;
      await this.userRepository.save(user);
      return { message: 'Logout successfully', code: 201 };
    }
    return user;
  }
  public async isAdmin(token: string) {
    const user = await this.findUserByToken(token);
    if (user instanceof User) {
      return user.isAdmin;
    }
    return user;
  }

  async findUserByToken(token: string) {
    const user = await this.userRepository.findOneBy({ token });
    if (!user) {
      throw new HttpException('User Not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async getWarehouse(id: number) {
    const warehouse = await this.warehouseRepository.findOneBy({ id });
    if (warehouse) {
      return warehouse;
    } else {
      return null;
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreateGlobalShippingDto } from './dto/create-global-shipping.dto';
import { UpdateGlobalShippingDto } from './dto/update-global-shipping.dto';

@Injectable()
export class GlobalShippingService {
  create(createGlobalShippingDto: CreateGlobalShippingDto) {
    return 'This action adds a new globalShipping';
  }

  findAll() {
    return `This action returns all globalShipping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} globalShipping`;
  }

  update(id: number, updateGlobalShippingDto: UpdateGlobalShippingDto) {
    return `This action updates a #${id} globalShipping`;
  }

  remove(id: number) {
    return `This action removes a #${id} globalShipping`;
  }
}

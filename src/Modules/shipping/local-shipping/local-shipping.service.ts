import { Injectable } from '@nestjs/common';
import { CreateLocalShippingDto } from './dto/create-local-shipping.dto';
import { UpdateLocalShippingDto } from './dto/update-local-shipping.dto';
import { IDeleveryService } from '../../../Interface/delevery-service.interface';

@Injectable()
export class LocalShippingService {
  /*create(createLocalShippingDto: CreateLocalShippingDto) {
      return 'This action adds a new localShipping';
    }

    findAll() {
      return `This action returns all localShipping`;
    }

    findOne(id: number) {
      return `This action returns a #${id} localShipping`;
    }

    update(id: number, updateLocalShippingDto: UpdateLocalShippingDto) {
      return `This action updates a #${id} localShipping`;
    }

    remove(id: number) {
      return `This action removes a #${id} localShipping`;
    }*/
}

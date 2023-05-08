import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from '../../../entities/Request';
import { RequestService } from './request.service';
import { Warehouse } from '../../../entities/Warehouse';
import { User } from '../../../entities/User';
import { Product } from '../../../entities/Product';
import { ShippingCompany } from '../../../entities/ShippingCompany';

@Module({
  controllers: [RequestController],
  imports: [
    TypeOrmModule.forFeature([
      Request,
      Warehouse,
      User,
      Product,
      ShippingCompany,
    ]),
  ],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule {}

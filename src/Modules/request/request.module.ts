import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from '../../../entities/Request';
import { RequestService } from './request.service';
import { Warehouse } from '../../../entities/Warehouse';
import { User } from '../../../entities/User';
import { Product } from '../../../entities/Product';
import { ShippingCompany } from '../../../entities/ShippingCompany';
import { LocalShippingController } from '../shipping/local-shipping/local-shipping.controller';
import { GlobalShippingController } from '../shipping/global-shipping/global-shipping.controller';
import { IDeleveryService } from '../../Interface/delevery-service.interface';
import { LocalShippingModule } from '../shipping/local-shipping/local-shipping.module';
import { GlobalShippingModule } from '../shipping/global-shipping/global-shipping.module';
import { LocalShippingService } from '../shipping/local-shipping/local-shipping.service';
import { GlobalShippingService } from '../shipping/global-shipping/global-shipping.service';

@Module({
  controllers: [
    RequestController,
    LocalShippingController,
    GlobalShippingController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Request,
      Warehouse,
      User,
      Product,
      ShippingCompany,
    ]),
    LocalShippingModule,
    GlobalShippingModule,
  ],
  providers: [
    RequestService,
    LocalShippingService,
    GlobalShippingService,
    { provide: 'IDeleveryService', useClass: LocalShippingController },
    { provide: 'IDeleveryService', useClass: GlobalShippingController },
  ],
  exports: [RequestService, LocalShippingService, GlobalShippingService],
})
export class RequestModule {}

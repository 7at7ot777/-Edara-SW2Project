import { Module } from '@nestjs/common';
import { GlobalShippingService } from './global-shipping.service';
import { GlobalShippingController } from './global-shipping.controller';

@Module({
  controllers: [GlobalShippingController],
  providers: [GlobalShippingService],
  exports: [GlobalShippingService],
})
export class GlobalShippingModule {}

import { Module } from '@nestjs/common';
import { LocalShippingService } from './local-shipping.service';
import { LocalShippingController } from './local-shipping.controller';

@Module({
  controllers: [LocalShippingController],
  providers: [LocalShippingService, LocalShippingController],
  exports: [LocalShippingController],
})
export class LocalShippingModule {}

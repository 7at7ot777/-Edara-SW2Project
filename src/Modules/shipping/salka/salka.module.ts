import { Module } from '@nestjs/common';
import { SalkaService } from './salka.service';
import { InternationalShipment } from './salka.controller';

@Module({
  providers: [SalkaService],
  controllers: [InternationalShipment],
})
export class SalkaModule {}

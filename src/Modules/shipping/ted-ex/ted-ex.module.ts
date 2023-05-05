import { Module } from '@nestjs/common';
import { LocalShipment } from './ted-ex.controller';
import { TedExService } from './ted-ex.service';

@Module({
  controllers: [LocalShipment],
  providers: [TedExService],
})
export class TedExModule {}

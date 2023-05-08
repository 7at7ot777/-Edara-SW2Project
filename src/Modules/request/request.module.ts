import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from '../../../entities/Request';
import { RequestService } from './request.service';

@Module({
  controllers: [RequestController],
  imports: [TypeOrmModule.forFeature([Request])],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule {}

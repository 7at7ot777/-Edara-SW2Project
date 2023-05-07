import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../../entities/User";
import { Warehouse } from "../../../entities/Warehouse";

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse])],
  providers: [WarehouseService],
  controllers: [WarehouseController]
})
export class WarehouseModule {}

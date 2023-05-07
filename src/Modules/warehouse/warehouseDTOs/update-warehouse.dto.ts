import { IsBoolean, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateWarehouseDto } from './create-warehouse.dto';

export class UpdateWarehouseDto extends PartialType(CreateWarehouseDto) {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './warehouseDTOs/create-warehouse.dto';
import { UpdateWarehouseDto } from './warehouseDTOs/update-warehouse.dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}
  @Post('createWarehouse')
  createWarehouse(
    @Body(ValidationPipe) createWarehouseDto: CreateWarehouseDto,
  ) {
    return this.warehouseService.createWarehouse(createWarehouseDto);
  }
  @Get('getWarehouse/:id')
  getWarehouse(@Param('id') id: number) {
    return this.warehouseService.getWarehouse(id);
  }
  @Get('getWarehouses')
  getWarehouses() {
    return this.warehouseService.getWarehouses();
  }
  @Put('updateWarehouse/:id')
  updateWarehouse(
    @Param('id') id: number,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehouseService.updateWarehouse(id, updateWarehouseDto);
  }
  @Delete('deleteWarehouse/:id')
  deleteWarehouses(@Param('id') id: number) {
    return this.warehouseService.deleteWarehouse(id);
  }
}

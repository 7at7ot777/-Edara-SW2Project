import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Warehouse } from '../../../entities/Warehouse';
import { Repository } from 'typeorm';
import { CreateWarehouseDto } from './warehouseDTOs/create-warehouse.dto';
import { UpdateWarehouseDto } from './warehouseDTOs/update-warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
  ) {}

  async createWarehouse(createWarehouseDto: CreateWarehouseDto) {
    const warehouse = this.warehouseRepository.create(createWarehouseDto);
    await this.warehouseRepository.save(warehouse);
    return { message: 'warehouse is added successfully', code: 200 };
  }
  async getWarehouses() {
    const warehouses = await this.warehouseRepository.find();
    if (!warehouses[0]) {
      return {
        message: 'There are no warehouses',
        code: HttpStatus.NO_CONTENT,
      };
    }
    return warehouses;
  }
  async getWarehouse(id: number) {
    const warehouse = await this.warehouseRepository.findOneBy({ id });
    if (!warehouse) {
      return { message: 'Cannot found warehouse', code: 404 };
    }
    return warehouse;
  }
  async deleteWarehouse(id: number) {
    const warehouse = await this.warehouseRepository.findOneBy({ id });
    if (warehouse) {
      await this.warehouseRepository.remove(warehouse);
      return { message: 'Warehouse is deleted succesfully', code: 200 };
    }
    return { message: 'Warehouse not found', code: 404 };
  }
  async updateWarehouse(id: number, updateWarehouseDto: UpdateWarehouseDto) {
    const warehouse = await this.warehouseRepository.findOneBy({ id });
    if (warehouse) {
      await this.updateWarehouseData(warehouse, updateWarehouseDto);
      return { message: 'Warehouse is updated succesfully', code: 200 };
    }
    return { message: 'Warehouse not found', code: 404 };
  }
  async updateWarehouseData(warehouse: Warehouse, data: UpdateWarehouseDto) {
    if (data.name != '' && data.name !== null) {
      warehouse.name = data.name;
    }
    if (data.location != '' && data.location !== null) {
      warehouse.location = data.location;
    }
    if (data.isActive !== null) {
      warehouse.isActive = data.isActive;
    }
    await this.warehouseRepository.save(warehouse);
  }
}

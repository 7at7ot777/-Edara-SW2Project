import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GlobalShippingService } from './global-shipping.service';
import { CreateGlobalShippingDto } from './dto/create-global-shipping.dto';
import { UpdateGlobalShippingDto } from './dto/update-global-shipping.dto';
import { IDeleveryService } from '../../../Interface/delevery-service.interface';

@Controller('global-shipping')
export class GlobalShippingController implements IDeleveryService {
  companyName = 'Amazon Shipping';
  id: 2;

  shipProduct(): string {
    console.log(
      `The Product is now Shipping By Globally by the ${this.companyName}...`,
    );
    return `The Product is now Shipping By Globally by the ${this.companyName}...`;

    /*
  @Post()
  create(@Body() createGlobalShippingDto: CreateGlobalShippingDto) {
    return this.globalShippingService.create(createGlobalShippingDto);
  }

  @Get()
  findAll() {
    return this.globalShippingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.globalShippingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGlobalShippingDto: UpdateGlobalShippingDto,
  ) {
    return this.globalShippingService.update(+id, updateGlobalShippingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.globalShippingService.remove(+id);
  }*/
  }
}

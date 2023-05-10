import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocalShippingService } from './local-shipping.service';
import { CreateLocalShippingDto } from './dto/create-local-shipping.dto';
import { UpdateLocalShippingDto } from './dto/update-local-shipping.dto';
import { IDeleveryService } from '../../../Interface/delevery-service.interface';

@Controller('local-shipping')
export class LocalShippingController implements IDeleveryService {
  companyName = 'FedEx';
  id: 2;

  shipProduct(): any {
    console.log(
      `The Product is now Shipping By Locally by the ${this.companyName}...`,
    );
    return `The Product is now Shipping By Locally by the ${this.companyName}...`;
  }

  /*constructor(private readonly localShippingService: LocalShippingService) {}

  @Post()
  create(@Body() createLocalShippingDto: CreateLocalShippingDto) {
    return this.localShippingService.create(createLocalShippingDto);
  }

  @Get()
  findAll() {
    return this.localShippingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localShippingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocalShippingDto: UpdateLocalShippingDto) {
    return this.localShippingService.update(+id, updateLocalShippingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localShippingService.remove(+id);
  }*/
}

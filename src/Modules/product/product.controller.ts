import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @Get('getAllProductsForAdmin')
  getAllProductsForAdmin() {
    return this.productService.getAllProductsForAdmin();
  }
  @Post('createProduct')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('findAllProducts/:warehouseId')
  findAll(@Param('warehouseId') warehouseId: number) {
    return this.productService.findAll(warehouseId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}

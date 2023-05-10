import {
  Body,
  Injectable,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../../entities/Product';
import { Repository } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import e from 'express';
import { Warehouse } from '../../../entities/Warehouse';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
  ) {}
  async updateProductData(product: Product, data: UpdateProductDto) {
    console.log(data.stock);
    if (data.warehouseId !== null) {
      product.warehouse = await this.warehouseRepository.findOneBy({
        id: data.warehouseId,
      });
      console.log('enterd here1');

    }
    if (data.stock != null) {
      product.stock = data.stock;
      console.log('enterd here2');

    }
    if (data.name !== null && data.name != '') {
      product.name = data.name;
      console.log('enterd here3');

    }
    if (data.description !== null && data.description !== '') {
      product.description = data.description;
      console.log('enterd here4');

    }
  }
  async create(createProductDto: CreateProductDto) {
    const warehouse = await this.warehouseRepository.findOneBy({
      id: createProductDto.warehouseId,
    });
    if (warehouse) {
      const product = await this.productRepository.create({
        ...createProductDto,
      });
      product.warehouse = warehouse;
      this.productRepository.save(product);
      return { message: 'product is added successfully' };
    }
    return { error: 'warehouse not found' };
  }

  async findAll(warehouseId: number) {
    const warehouse = await this.warehouseRepository.findOneBy({
      id: warehouseId,
    });
    const product = await this.productRepository.find({
      where: { warehouse: warehouse },
    });
    if (warehouse && product[0]) {
      return { products: product };
    }
    return { error: 'Warehouse is Empty or Not Found' };
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (product) {
      return { product: product };
    }
    return { message: 'Product Not found' };
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    console.log(updateProductDto);

    const product = await this.productRepository.findOneBy({ id });
    if (product) {
      await this.updateProductData(product, updateProductDto);
      //this.productRepository.update()
      await this.productRepository.save(product);
      return { message: 'Product updated successfully' };
    }
    return { message: 'Product Not found' };
  }


  async remove(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (product) {
      await this.productRepository.remove(product);
      return { message: 'deleted successfully' };
    }
    return { message: 'Product Not found' };
  }
  async getAllProductsForAdmin() {
    const products = await this.productRepository.find();
    console.log(products[0]);
    if (products[0]) {
      console.log(products);
      return { products: products };
    }
    return { message: 'there are no product now ' };
  }
}

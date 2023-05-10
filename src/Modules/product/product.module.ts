import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../entities/User';
import { Warehouse } from '../../../entities/Warehouse';
import { Product } from '../../../entities/Product';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
  imports: [TypeOrmModule.forFeature([User, Warehouse, Product])],
})
export class ProductModule {}

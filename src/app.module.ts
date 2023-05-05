import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User';
import { Warehouse } from '../entities/Warehouse';
import { Product } from '../entities/Product';
import { Request } from '../entities/Request';
import { ShippingCompany } from '../entities/ShippingCompany';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'softwareproject',
      synchronize: true,
      entities: [User, Warehouse, Product, Request, ShippingCompany],
      //migrationsRun: true,
      //  dropSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

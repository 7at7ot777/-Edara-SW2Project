import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User';
import { Warehouse } from '../entities/Warehouse';
import { Product } from '../entities/Product';
import { Request } from '../entities/Request';
import { ShippingCompany } from '../entities/ShippingCompany';
import { UserController } from './Modules/user/user.controller';
import { UserService } from './Modules/user/user.service';
import { UserModule } from "./Modules/user/user.module";
import { AdminModule } from "./Modules/user/admin/admin.module";
import { WarehouseModule } from "./Modules/warehouse/warehouse.module";
import { ProductModule } from "./Modules/product/product.module";

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
    UserModule,
    AdminModule,
    WarehouseModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

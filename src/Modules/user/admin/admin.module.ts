import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../../entities/User';
import { Warehouse } from '../../../../entities/Warehouse';
import { IsAdminMiddleware } from './middlewares/is-admin.middleware';


@Module({
  imports: [TypeOrmModule.forFeature([User, Warehouse])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule implements NestModule {
  async configure(consumer: MiddlewareConsumer): Promise<any> {
    await consumer.apply(IsAdminMiddleware).forRoutes(
      {
        path: 'admin/getUser/:id',
        method: RequestMethod.GET,
      },
      {
        path: 'admin/updateUser/11',
        method: RequestMethod.PUT,
      },
      {
        path: 'admin/addUser',
        method: RequestMethod.POST,
      },
      {
        path: 'admin/getAllUsers',
        method: RequestMethod.GET,
      },
      {
        path: 'admin/deleteUser/:id',
        method: RequestMethod.DELETE,
      },
      {
        path: 'warehouse/deleteWarehouse/:id',
        method: RequestMethod.DELETE,
      },
      {
        path: 'warehouse/updateWarehouse/:id',
        method: RequestMethod.PUT,
      },
      {
        path: 'warehouse/getWarehouses',
        method: RequestMethod.GET,
      },
      {
        path: 'warehouse/getWarehouse/:id',
        method: RequestMethod.GET,
      },
      {
        path: 'warehouse/createWarehouse',
        method: RequestMethod.POST,
      },
    );
  }
}

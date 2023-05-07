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
import { Model } from "../../../../entities/Model";

@Module({
  imports: [TypeOrmModule.forFeature([User, Warehouse,Model])],
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
    );
  }
}

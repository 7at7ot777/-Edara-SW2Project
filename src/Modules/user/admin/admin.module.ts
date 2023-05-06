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
    await consumer.apply(IsAdminMiddleware).forRoutes({
      path: 'admin/getUser/:id',
      method: RequestMethod.GET,
    });
  }
}

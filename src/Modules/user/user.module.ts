import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AdminModule } from './admin/admin.module';
import { SupervisorModule } from './supervisor/supervisor.module';
import { User } from '../../../entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from '../../../entities/Warehouse';

@Module({
  imports: [TypeOrmModule.forFeature([User, Warehouse])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

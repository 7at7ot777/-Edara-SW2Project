import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Request } from './Request';
import { Warehouse } from './Warehouse';
import { JoinColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  token: string;
  @Column()
  phone: string;
  @Column()
  isActive: boolean;
  @Column()
  isAdmin: boolean;
  @OneToMany(() => Request, (request) => request.user)
  requests: Request[];
  @OneToOne(() => Warehouse)
  @JoinColumn()
  warehouse: Warehouse;
}

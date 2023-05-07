import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { Warehouse } from './Warehouse';
import { Request } from './Request';
import { Model } from './Model';

@Entity({ name: 'products' })
export class Product extends Model{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  photo: string;
  @Column()
  stock: number;
  @ManyToOne(() => Warehouse, (warehouse) => warehouse.products)
  warehouse: Warehouse;
  @OneToMany(() => Request, (request) => request.product)
  requests: Request[];
}

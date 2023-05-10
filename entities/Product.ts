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

@Entity({ name: 'products' })
export class Product {
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
  @ManyToOne(() => Warehouse, (warehouse) => warehouse.products, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  warehouse: Warehouse;
  @OneToMany(() => Request, (request) => request.product, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  requests: Request[];
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';
import { Model } from './Model';

@Entity({ name: 'warehouses' })
export class Warehouse extends Model {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  location: string;
  @Column()
  isActive: boolean;
  @OneToMany(() => Product, (product) => product.warehouse)
  products: Product[];
}

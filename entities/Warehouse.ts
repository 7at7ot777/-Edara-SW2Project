import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';

@Entity({ name: 'warehouses' })
export class Warehouse {
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

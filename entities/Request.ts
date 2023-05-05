import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShippingCompany } from './ShippingCompany';
import { User } from './User';
import { Product } from './Product';

@Entity({ name: 'requests' })
export class Request {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantity: number;
  @Column()
  isActive: boolean;
  @Column()
  isIncrease: boolean;
  @Column()
  isAccepted: boolean;

  @ManyToOne(
    () => ShippingCompany,
    (shippingComapny) => shippingComapny.requests,
  )
  shippingCompany: ShippingCompany;
  @ManyToOne(() => User, (user) => user.requests)
  user: User;
  @ManyToOne(() => Product, (Product) => Product.requests)
  product: Product;
}

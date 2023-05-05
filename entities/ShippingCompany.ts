import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Request } from './Request';
import { JoinColumn } from 'typeorm';

@Entity({ name: 'shipping_companies' })
export class ShippingCompany {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  company_name: string;
  @OneToMany(() => Request, (request) => request.shippingCompany)
  @JoinColumn()
  requests: Request[];
}

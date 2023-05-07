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
export class User{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  token: string;
  @Column()
  phone: string;
  @Column()
  isActive: boolean;
  @Column({ default: false })
  isAdmin: boolean;
  @OneToMany(() => Request, (request) => request.user)
  requests: Request[];
  @OneToOne(() => Warehouse, { onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  warehouse: Warehouse;
}

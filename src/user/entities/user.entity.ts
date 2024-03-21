import { Order } from 'src/order/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email:string

  @Column()
  password:string

  @Column({default:'user',type:'enum',enum:['user','admin']})
  role:string

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(()=>Order, order=>order.user,{ onDelete: 'CASCADE' })
  orders:Order[]
  

}
import { Product } from "src/products/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToMany(()=>Product)
    @JoinTable()
    products:Product[]
   
    @ManyToOne(()=>User,user=>user.orders)
    user:User

    @Column({default:1})
    quantity:number
    
    @Column({nullable:true})
    totalPrice:number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
    @Column({ default: false })
    isPaid: boolean;

    @Column({type:'enum',enum:['pending','delivered','canceled'],nullable:true})
    status:string
  

}

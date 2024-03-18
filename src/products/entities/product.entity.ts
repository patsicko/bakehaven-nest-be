import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({type:'enum',enum:['cakes','cupcakes','weddings','snacks','ibiraha','beignets','amandazi','sambusa']})
    category:string

    @Column()
    description:string

    @Column()
    quantity:number

    @Column()
    price:number

    @Column({nullable:true})
    rating:number

    @Column({default:false})
    inStock:boolean

    @Column()
    imageUrl:string


}

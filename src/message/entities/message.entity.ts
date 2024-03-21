import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    names:string

    @Column()
    email:string

    @Column()
    message:string
    
}

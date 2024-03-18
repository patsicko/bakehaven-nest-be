import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { In, Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order) private readonly orderRepository:Repository<Order>,
    @InjectRepository(Product) private readonly  productRepository:Repository<Product>,
    @InjectRepository(User) private readonly userRepository:Repository<User>

    ){}

  async create(createOrderDto: CreateOrderDto):Promise<Order| string> {

 const {userId,productIds,quantity} = createOrderDto;

 const user =await  this.userRepository.findOne({where:{id:userId}});

 if(!user){
  return 'Create account before ordering'
 }

 const products = await  this.productRepository.find({where:{id:In(productIds)}})

 if(products.length!=productIds.length){
  throw new Error("Some products are not available")
 }

  const order:Partial<Order> = {
    user,
    products,
    quantity,
    totalPrice: products.reduce((total, product) => total + product.price * quantity, 0),
    createdAt:new Date(),
    status:'pending'
  }
   
  const savedOrder=await this.orderRepository.save(order)

    return savedOrder;
  }

 async findAll():Promise<Order[]> {
    return this.orderRepository.find({relations:['user','products']});
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

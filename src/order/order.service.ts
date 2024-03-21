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

  async findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne({where:{id},relations:['user', 'products']});
  }

  async approve(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({where:{id}});
    console.log("order ",order)
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }

  
    order.status = 'approved';

    return this.orderRepository.save(order);
  }

  async cancel(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({where:{id}});
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }

 
    order.status = 'cancelled';

    return this.orderRepository.save(order);
  }

  async delete(id: number): Promise<void> {
    const order = await this.orderRepository.findOne({where:{id}});
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }

    await this.orderRepository.remove(order);
  }
}

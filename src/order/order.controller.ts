import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }


  @ApiParam({ name: 'id', description: 'Order Id' })
  @Patch('approve/:id')
  approve(@Param('id') id: string) {
    return this.orderService.approve(+id);
  }

  @ApiParam({ name: 'id', description: 'Order Id' })
  @Patch('cancel/:id')
  cancel(@Param('id') id: string) {
    return this.orderService.cancel(+id);
  }

  @ApiParam({ name: 'id', description: 'Order Id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.delete(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {

  constructor(
 @InjectRepository(Message) private readonly messageRepository:Repository<Message>
  ){}
  


  async create(createMessageDto: CreateMessageDto):Promise<Message> {

  const message= await this.messageRepository.save(createMessageDto)
    return message ;
  }

 async findAll():Promise<Message[]> {
  const messages= await this.messageRepository.find()
    return messages ;
  }

 async findOne(id: number):Promise<Message> {
  const message= await this.messageRepository.findOne({where:{id}})
    return message;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

 async remove(id: number):Promise<any> {
    return  await this.messageRepository.delete(id);
  }
}

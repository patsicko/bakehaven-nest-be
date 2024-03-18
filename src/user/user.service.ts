import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}



  findUserByEmail(email){
    return this.userRepository.findOne({where:{email}})
    }

 async create(createUserDto: CreateUserDto):Promise<User> {

    const user = await this.userRepository.save(createUserDto)
    return user ;
  }

  async findAll():Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: number):Promise<User> {
    const user = await this.userRepository.findOne({where:{id}})
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<any> {
    const user= await this.userRepository.find({where:{id}})
    if(!user){
      throw error("User not found")
       
    }
    const updated = await this.userRepository.update(id,updateUserDto);

    return updated
  }

  async remove(id: number):Promise<any> {
    return await this.userRepository.delete(id);
  }
}

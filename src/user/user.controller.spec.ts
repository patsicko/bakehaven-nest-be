import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { create } from 'domain';

describe('UserController', () => {
  let controller: UserController;
  let dto={
    firstName: "MANIBAHO",
    lastName: 'Patrick',
    email: 'patsicko@gmail.com',
    password: '123'
  }
  let mockUserService = {
    create:jest.fn(dto=>{
      return {
        id:Date.now(),
        ...dto
      }
    })

   
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).overrideProvider(UserService).useValue(mockUserService).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user',()=>{
      expect(controller.create(dto
    )).toEqual({
      id: expect.any(Number),
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      password:dto.password
    });

    expect(mockUserService.create).toHaveBeenCalledWith(dto
    );
  })



  
});

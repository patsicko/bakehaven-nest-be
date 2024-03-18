import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        default:"Manibaho"
    })
    @IsString()
    @IsNotEmpty()
    firstName:string

    @ApiProperty({
        default:"Patrick"
    })
    @IsString()
    @IsNotEmpty()
    lastName:string

    @ApiProperty({
        default:"patsicko@gmail.com"
    })
    @IsString()
    @IsNotEmpty()
    email:string

    @ApiProperty({
        default:"123"
    })
    @IsString()
    @IsNotEmpty()
    password:string
}

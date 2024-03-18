import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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

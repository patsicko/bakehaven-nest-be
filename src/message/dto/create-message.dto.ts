import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateMessageDto {

    @ApiProperty({
        default:"Doe"
    })
    @IsNotEmpty()
    @IsString()
    names:string

    @ApiProperty({
        default:"doe@gmail.com"
    })
    @IsNotEmpty()
    @IsString()
    email:string

    @ApiProperty({
        default:"Hello from customers !!"
    })
    @IsNotEmpty()
    @IsString()
    message:string
    
}

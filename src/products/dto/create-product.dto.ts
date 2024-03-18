import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @ApiProperty({
        default:"small cake"
    })
    @IsString()
    @IsNotEmpty()
    name:string
   
    @ApiProperty({
        default:"cakes"
    })
    @IsString()
    @IsNotEmpty()
    category:string


    @ApiProperty({
        default:"sweet product"
    })
    @IsString()
    @IsNotEmpty()
    description:string
    
    @ApiProperty({
        default:5
    })
    @IsNumber()
    @IsNotEmpty()
    quantity:number
   
    @ApiProperty({
        default:500
    })
    @IsNumber()
    @IsNotEmpty()
    price:number
   
    @ApiProperty({
        default:"cake image"
    })
    @IsString()
    @IsNotEmpty()
    imageUrl:string
}

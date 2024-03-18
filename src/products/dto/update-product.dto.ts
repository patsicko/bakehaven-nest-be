import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({
        default:"mexican cake"
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
        default:5
    })
    
    @ApiProperty({
        default:"cake image"
    })
    @IsString()
    @IsNotEmpty()
    imageUrl:string
}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {

     @ApiProperty({
        default:1
    })
    @IsNotEmpty()
    @IsNumber()
    userId: number; 

    @ApiProperty()
    @IsNotEmpty()
    productIds: number[]; 

    @ApiProperty({
        default:1
    })
    @IsNotEmpty()
    quantity: number; 
}

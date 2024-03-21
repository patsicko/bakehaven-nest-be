import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { run } from 'node:test';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly productRepository:Repository<Product>){}
  
  async create(createProductDto: CreateProductDto):Promise<Product> {
    const product= await this.productRepository.save(createProductDto)
    return  product;
  }

 async findAll():Promise<Product[]> {
  const products = await this.productRepository.find()
    return products
  }

  async findByName(name: string): Promise<Product | string | null> {
    const product = await this.productRepository.findOne({ where: { name } });
    if (!product) {
      return 'Product not found';
    }
    return product;
  }

  // async findByCategory(category: string): Promise<Product[] | string> {
  //   const products = await this.productRepository.find({ where: { category } });
  //   console.log("products",products)
  //   if (!products || products.length === 0) {
  //     return 'No products found for this category';
  //   }
  //   return products;
  // }
  


 async findOne(id: number):Promise<Product | string | null > {
  const product = await this.productRepository.findOne({where:{id}})
  if(!product){
   return "Product not found"
  }
    return product
  }

 async update(id: number, updateProductDto: UpdateProductDto):Promise<any> {
  const product = await this.productRepository.findOne({where:{id}})

  if(!product){
    return "Product not found"
  }

  const updated = await this.productRepository.update(id,updateProductDto)
    return  updated;
  }

 async remove(id: number):Promise<any> {
  const product = await this.productRepository.findOne({where:{id}})

  if(!product){
    return "Product not found"
  }
   
    return await this.productRepository.delete(id);
  }
}

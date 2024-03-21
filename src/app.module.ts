import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-eu-central-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.emfmuzrfaqdvmxbkximw',
      password: 'bakehaven@123',
      database: 'postgres',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UserModule,
    ProductsModule,
    OrderModule,
    MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'bakehaven',
//       entities: ['dist/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     UserModule,
//     ProductsModule,
//     OrderModule,
//     MessageModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

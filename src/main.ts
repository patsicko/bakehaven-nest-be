import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: '*',
    credentials: true,
  })

  const config = new DocumentBuilder()
  .setTitle('Bake Haven API Docs')
  .setDescription('Bake haven backend')
  .setVersion('1.0')
  .addTag('Users')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();

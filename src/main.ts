import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('FutLovers')
    .setDescription('Teste Backend para Lupit.io')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  app.setGlobalPrefix('fut-lovers');

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  await app.listen(process.env.PORT);
}
bootstrap();

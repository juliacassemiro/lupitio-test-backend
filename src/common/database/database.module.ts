import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { databaseAdapters, databaseEntities } from './database.index';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [...databaseEntities],
      synchronize: Boolean(process.env.DB_SYNCHRONIZE),
    }),
    TypeOrmModule.forFeature(databaseEntities),
  ],
  providers: [...databaseAdapters],
  exports: [...databaseAdapters],
})
export class DatabaseModule {}

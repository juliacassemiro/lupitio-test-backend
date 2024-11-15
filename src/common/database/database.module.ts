import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseAdapters, databaseEntities } from './database.index';

@Module({
  imports: [TypeOrmModule.forFeature(databaseEntities)],
  providers: [...databaseAdapters],
  exports: [...databaseAdapters],
})
export class DatabaseModule {}

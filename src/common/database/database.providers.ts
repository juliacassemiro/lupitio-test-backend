import { DataSource } from 'typeorm';
import { databaseEntities } from './database.index';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [...databaseEntities],
        synchronize: Boolean(process.env.DB_SYNCHRONIZE),
      });

      return dataSource.initialize();
    },
  },
];

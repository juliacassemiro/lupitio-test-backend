import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { PlayersController } from './players.controller';
import { CreatePlayerUseCase } from './use-cases/create-player.use-case';
import { DeletePlayerUseCase } from './use-cases/delete-player.use-case';
import { GetAllPlayerUseCase } from './use-cases/get-all-players.use-case';
import { GetOnePlayerUseCase } from './use-cases/get-one-player.use-case';
import { UpdatePlayerUseCase } from './use-cases/update-player.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayersController],
  providers: [
    CreatePlayerUseCase,
    UpdatePlayerUseCase,
    GetOnePlayerUseCase,
    GetAllPlayerUseCase,
    DeletePlayerUseCase,
  ],
})
export class PlayersModule {}

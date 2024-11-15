import { Module } from '@nestjs/common';
import { SoccerPlayersService } from './soccer-players.service';
import { SoccerPlayersController } from './soccer-players.controller';

@Module({
  controllers: [SoccerPlayersController],
  providers: [SoccerPlayersService],
})
export class SoccerPlayersModule {}

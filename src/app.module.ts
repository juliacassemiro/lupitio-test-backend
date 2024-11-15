import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoccerPlayersModule } from './soccer-players/soccer-players.module';
import { SoccerTeamsModule } from './soccer-teams/soccer-teams.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [DatabaseModule, SoccerPlayersModule, SoccerTeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

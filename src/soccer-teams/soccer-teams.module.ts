import { Module } from '@nestjs/common';
import { SoccerTeamsService } from './soccer-teams.service';
import { SoccerTeamsController } from './soccer-teams.controller';

@Module({
  controllers: [SoccerTeamsController],
  providers: [SoccerTeamsService],
})
export class SoccerTeamsModule {}

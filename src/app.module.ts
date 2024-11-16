import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/database/database.module';
import { PlayersModule } from './modules/players/players.module';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [DatabaseModule, PlayersModule, TeamsModule],
})
export class AppModule {}

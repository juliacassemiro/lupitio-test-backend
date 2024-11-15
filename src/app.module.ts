import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { PlayersModule } from './modules/players/players.module';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [DatabaseModule, PlayersModule, TeamsModule],
  providers: [AppService],
})
export class AppModule {}

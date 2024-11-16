import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { DashboardController } from './dashboard.controller';
import { DashboardCountsUseCase } from './use-cases/dashboard-counts.use-case';
import { DashboardGetPlayersUseCase } from './use-cases/dashboard-get-players.use-case';
import { DashboardPlayersPerTeamUseCase } from './use-cases/dashboard-players-per-team.use-case';
import { DashboardGetTeamsUseCase } from './use-cases/dashboard-get-teams.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [DashboardController],
  providers: [
    DashboardCountsUseCase,
    DashboardPlayersPerTeamUseCase,
    DashboardGetPlayersUseCase,
    DashboardGetTeamsUseCase,
  ],
})
export class DashboardModule {}

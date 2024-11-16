import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DashboardCountsUseCase } from './use-cases/dashboard-counts.use-case';
import { DashboardPlayersPerTeamUseCase } from './use-cases/dashboard-players-per-team.use-case';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardCountsUseCase: DashboardCountsUseCase,
    private readonly dashboardPlayersPerTeamUseCase: DashboardPlayersPerTeamUseCase,
  ) {}

  @Get('counts')
  @ApiOperation({
    summary: 'Contagem de times, jogadores e idade média dos jogadores',
  })
  async counts() {
    return await this.dashboardCountsUseCase.execute();
  }

  @Get('players-per-team')
  @ApiOperation({
    summary: 'Contagem de jogadores por time',
  })
  async playersPerTeam() {
    return await this.dashboardPlayersPerTeamUseCase.execute();
  }
}

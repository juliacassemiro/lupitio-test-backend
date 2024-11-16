import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PaginatedRequestDto } from 'src/shared/dtos/request/paginated-request.dto';
import { DashboardCountsUseCase } from './use-cases/dashboard-counts.use-case';
import { DashboardGetPlayersUseCase } from './use-cases/dashboard-get-players.use-case';
import { DashboardGetTeamsUseCase } from './use-cases/dashboard-get-teams.use-case';
import { DashboardPlayersPerTeamUseCase } from './use-cases/dashboard-players-per-team.use-case';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardCountsUseCase: DashboardCountsUseCase,
    private readonly dashboardPlayersPerTeamUseCase: DashboardPlayersPerTeamUseCase,
    private readonly dashboardGetPlayersUseCase: DashboardGetPlayersUseCase,
    private readonly dashboardGetTeamsUseCase: DashboardGetTeamsUseCase,
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

  @Get('players')
  @ApiOperation({
    summary: 'Listar jogadores com paginação',
  })
  async getPlayers(@Query() dto: PaginatedRequestDto) {
    return await this.dashboardGetPlayersUseCase.execute(dto);
  }

  @Get('teams')
  @ApiOperation({
    summary: 'Listar times com paginação',
  })
  async getTeams(@Query() dto: PaginatedRequestDto) {
    return await this.dashboardGetTeamsUseCase.execute(dto);
  }
}

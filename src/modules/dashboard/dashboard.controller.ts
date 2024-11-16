import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DashboardCountsUseCase } from './use-cases/dashboard-counts.use-case';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardCountsUseCase: DashboardCountsUseCase,
  ) {}

  @Get('counts')
  @ApiOperation({
    summary: 'Listar contagem de times, jogadores e idade média dos jogadores',
  })
  async counts() {
    return await this.dashboardCountsUseCase.execute();
  }
}

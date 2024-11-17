import { Injectable } from '@nestjs/common';
import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';
import { PaginatedRequestDto } from 'src/shared/dtos/request/paginated-request.dto';

@Injectable()
export class DashboardGetTeamsUseCase {
  constructor(private readonly teamsGatewayAdapter: TeamsGatewayAdapter) {}

  async execute(dto: PaginatedRequestDto) {
    const response = await this.teamsGatewayAdapter.findPaginated(dto, {
      relations: { players: true },
    });

    const dataWithCount: object[] = [];
    response.data.forEach((team) => {
      const { players, ...rest } = team;
      dataWithCount.push({ ...rest, playersCount: players?.length || 0 });
    });

    return {
      data: dataWithCount,
      total: response.total,
      page: response.page,
      limit: response.limit,
      totalPages: response.totalPages,
    };
  }
}

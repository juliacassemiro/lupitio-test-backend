import { Injectable } from '@nestjs/common';
import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';
import { PaginatedRequestDto } from 'src/shared/dtos/request/paginated-request.dto';

@Injectable()
export class DashboardGetTeamsUseCase {
  constructor(private readonly teamsGatewayAdapter: TeamsGatewayAdapter) {}

  async execute(dto: PaginatedRequestDto) {
    return await this.teamsGatewayAdapter.findPaginated(dto);
  }
}

import { Injectable } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';
import { PaginatedRequestDto } from 'src/shared/dtos/request/paginated-request.dto';

@Injectable()
export class DashboardGetPlayersUseCase {
  constructor(private readonly playersGatewayAdapter: PlayersGatewayAdapter) {}

  async execute(dto: PaginatedRequestDto) {
    return await this.playersGatewayAdapter.findPaginated(dto);
  }
}

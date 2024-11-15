import { Injectable, NotFoundException } from '@nestjs/common';
import { TeamsGatewayAdapter } from '../../../common/database/adapters/teams-gateway.adapter';

@Injectable()
export class GetOneTeamUseCase {
  constructor(private readonly teamsGatewayAdapter: TeamsGatewayAdapter) {}

  async execute(id: number) {
    const team = await this.teamsGatewayAdapter.findOne({ where: { id } });
    if (!team) throw new NotFoundException('Time não encontrado');

    return team;
  }
}

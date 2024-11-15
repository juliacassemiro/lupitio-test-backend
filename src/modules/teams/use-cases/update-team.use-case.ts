import { Injectable, NotFoundException } from '@nestjs/common';
import { TeamsGatewayAdapter } from '../../../common/database/adapters/teams-gateway.adapter';
import { UpdateTeamRequestDto } from '../dtos/request/update-team-request.dto';

@Injectable()
export class UpdateTeamUseCase {
  constructor(private readonly teamsGatewayAdapter: TeamsGatewayAdapter) {}

  async execute(id: number, dto: UpdateTeamRequestDto) {
    const team = await this.teamsGatewayAdapter.findOne({ where: { id } });
    if (!team) throw new NotFoundException('Time não encontrado');

    return await this.teamsGatewayAdapter.update(team.id, dto);
  }
}

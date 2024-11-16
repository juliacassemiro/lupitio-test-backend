import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';
import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';
import { CreatePlayerRequestDto } from '../dtos/request/create-player-request.dto';

@Injectable()
export class CreatePlayerUseCase {
  constructor(
    private readonly playersGatewayAdapter: PlayersGatewayAdapter,
    private readonly teamsGatewayAdapter: TeamsGatewayAdapter,
  ) {}

  async execute(dto: CreatePlayerRequestDto) {
    const { teamId, ...rest } = dto;

    const team = await this.findTeam(teamId);

    return await this.playersGatewayAdapter.create({ ...rest, team });
  }

  private async findTeam(teamId: number) {
    const team = await this.teamsGatewayAdapter.findOne({
      where: { id: teamId },
    });
    if (!team) throw new NotFoundException('Time não encontrado');

    return team;
  }
}

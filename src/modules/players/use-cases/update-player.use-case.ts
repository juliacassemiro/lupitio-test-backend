import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';
import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';
import { FileService } from 'src/common/file/file.service';
import { UpdatePlayerRequestDto } from '../dtos/request/update-player-request.dto';

@Injectable()
export class UpdatePlayerUseCase {
  constructor(
    private readonly playersGatewayAdapter: PlayersGatewayAdapter,
    private readonly teamsGatewayAdapter: TeamsGatewayAdapter,
    private readonly fileService: FileService,
  ) {}

  async execute(
    id: number,
    dto: UpdatePlayerRequestDto,
    buffer?: Buffer,
    mimeType?: string,
  ) {
    const player = await this.findPlayer(id);

    const { teamId, ...rest } = dto;
    const team = teamId ? await this.findTeam(teamId) : undefined;

    const photo = buffer
      ? await this.fileService.upload(buffer, mimeType)
      : undefined;

    return await this.playersGatewayAdapter.update(player.id, {
      ...rest,
      team,
      photo,
    });
  }

  private async findPlayer(id: number) {
    const player = await this.playersGatewayAdapter.findOne({
      where: { id },
    });
    if (!player) throw new NotFoundException('Jogador não encontrado');

    return player;
  }

  private async findTeam(teamId: number) {
    const team = await this.teamsGatewayAdapter.findOne({
      where: { id: teamId },
    });
    if (!team) throw new NotFoundException('Time não encontrado');

    return team;
  }
}

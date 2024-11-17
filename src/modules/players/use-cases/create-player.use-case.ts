import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';
import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';
import { FileService } from 'src/common/file/file.service';
import { CreatePlayerRequestDto } from '../dtos/request/create-player-request.dto';

@Injectable()
export class CreatePlayerUseCase {
  constructor(
    private readonly playersGatewayAdapter: PlayersGatewayAdapter,
    private readonly teamsGatewayAdapter: TeamsGatewayAdapter,
    private readonly fileService: FileService,
  ) {}

  async execute(dto: CreatePlayerRequestDto, buffer: Buffer, mimeType: string) {
    const { teamId, ...rest } = dto;

    const team = await this.findTeam(teamId);

    const photo = await this.fileService.upload(buffer, mimeType);

    return await this.playersGatewayAdapter.create({ ...rest, team, photo });
  }

  private async findTeam(teamId: number) {
    const team = await this.teamsGatewayAdapter.findOne({
      where: { id: teamId },
    });
    if (!team) throw new NotFoundException('Time não encontrado');

    return team;
  }
}

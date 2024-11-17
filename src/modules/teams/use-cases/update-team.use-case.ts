import { Injectable, NotFoundException } from '@nestjs/common';
import { FileService } from 'src/common/file/file.service';
import { TeamsGatewayAdapter } from '../../../common/database/adapters/teams-gateway.adapter';
import { UpdateTeamRequestDto } from '../dtos/request/update-team-request.dto';

@Injectable()
export class UpdateTeamUseCase {
  constructor(
    private readonly teamsGatewayAdapter: TeamsGatewayAdapter,
    private readonly fileService: FileService,
  ) {}

  async execute(
    id: number,
    dto: UpdateTeamRequestDto,
    buffer?: Buffer,
    mimeType?: string,
  ) {
    const team = await this.teamsGatewayAdapter.findOne({ where: { id } });
    if (!team) throw new NotFoundException('Time não encontrado');

    const logo = buffer
      ? await this.fileService.upload(buffer, mimeType)
      : undefined;

    return await this.teamsGatewayAdapter.update(team.id, { ...dto, logo });
  }
}

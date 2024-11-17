import { Injectable } from '@nestjs/common';
import { FileService } from 'src/common/file/file.service';
import { TeamsGatewayAdapter } from '../../../common/database/adapters/teams-gateway.adapter';
import { CreateTeamRequestDto } from '../dtos/request/create-team-request.dto';

@Injectable()
export class CreateTeamUseCase {
  constructor(
    private readonly teamsGatewayAdapter: TeamsGatewayAdapter,
    private readonly fileService: FileService,
  ) {}

  async execute(dto: CreateTeamRequestDto, buffer: Buffer, mimeType: string) {
    const logo = await this.fileService.upload(buffer, mimeType);

    return await this.teamsGatewayAdapter.create({ ...dto, logo });
  }
}

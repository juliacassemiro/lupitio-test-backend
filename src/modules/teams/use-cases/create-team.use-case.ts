import { Injectable } from '@nestjs/common';
import { TeamsGatewayAdapter } from '../../../common/database/adapters/teams-gateway.adapter';
import { CreateTeamRequestDto } from '../dtos/request/create-team-request.dto';

@Injectable()
export class CreateTeamUseCase {
  constructor(private readonly teamsGatewayAdapter: TeamsGatewayAdapter) {}

  async execute(dto: CreateTeamRequestDto) {
    return await this.teamsGatewayAdapter.create(dto);
  }
}

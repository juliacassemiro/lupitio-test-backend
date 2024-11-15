import { Injectable } from '@nestjs/common';
import { TeamsGatewayAdapter } from '../../../common/database/adapters/teams-gateway.adapter';

@Injectable()
export class GetAllTeamsUseCase {
  constructor(private readonly teamsGatewayAdapter: TeamsGatewayAdapter) {}

  async execute() {
    return await this.teamsGatewayAdapter.find();
  }
}

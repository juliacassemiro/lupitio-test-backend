import { Injectable } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';
import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';

@Injectable()
export class DashboardCountsUseCase {
  constructor(
    private readonly playersGatewayAdapter: PlayersGatewayAdapter,
    private readonly teamsGatewayAdapter: TeamsGatewayAdapter,
  ) {}

  async execute() {
    const teams = await this.teamsGatewayAdapter.find();
    const players = await this.playersGatewayAdapter.find();

    let agesAvg = players.reduce((acc, player) => acc + player.age, 0);
    agesAvg = agesAvg / players.length;

    return {
      teams: teams.length,
      players: players.length,
      playersAgesAvg: agesAvg,
    };
  }
}

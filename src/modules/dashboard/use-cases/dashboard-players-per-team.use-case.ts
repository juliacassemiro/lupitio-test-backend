import { Injectable } from '@nestjs/common';
import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';

@Injectable()
export class DashboardPlayersPerTeamUseCase {
  constructor(private readonly teamsGatewayAdapter: TeamsGatewayAdapter) {}

  async execute() {
    const teams = await this.teamsGatewayAdapter.find({
      relations: { players: true },
    });

    const playersPerTeam: object[] = [];
    teams.forEach((team) => {
      playersPerTeam.push({
        team: { id: team.id, name: team.name },
        playersCount: team?.players?.length,
      });
    });

    return playersPerTeam;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateSoccerTeamDto } from './dto/create-soccer-team.dto';
import { UpdateSoccerTeamDto } from './dto/update-soccer-team.dto';

@Injectable()
export class SoccerTeamsService {
  create(createSoccerTeamDto: CreateSoccerTeamDto) {
    return 'This action adds a new soccerTeam';
  }

  findAll() {
    return `This action returns all soccerTeams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soccerTeam`;
  }

  update(id: number, updateSoccerTeamDto: UpdateSoccerTeamDto) {
    return `This action updates a #${id} soccerTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} soccerTeam`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTeamRequestDto } from './dtos/request/create-team-request.dto';
import { UpdateTeamRequestDto } from './dtos/request/update-team-request.dto';

@Injectable()
export class TeamsService {
  create(createTeamRequestDto: CreateTeamRequestDto) {
    return 'This action adds a new team';
  }

  findAll() {
    return `This action returns all teams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamRequestDto: UpdateTeamRequestDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}

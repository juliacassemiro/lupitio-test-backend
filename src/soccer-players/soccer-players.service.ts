import { Injectable } from '@nestjs/common';
import { CreateSoccerPlayerDto } from './dto/create-soccer-player.dto';
import { UpdateSoccerPlayerDto } from './dto/update-soccer-player.dto';

@Injectable()
export class SoccerPlayersService {
  create(createSoccerPlayerDto: CreateSoccerPlayerDto) {
    return 'This action adds a new soccerPlayer';
  }

  findAll() {
    return `This action returns all soccerPlayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soccerPlayer`;
  }

  update(id: number, updateSoccerPlayerDto: UpdateSoccerPlayerDto) {
    return `This action updates a #${id} soccerPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} soccerPlayer`;
  }
}

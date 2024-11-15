import { Injectable } from '@nestjs/common';
import { CreatePlayerRequestDto } from './dtos/request/create-player-request.dto';
import { UpdatePlayerRequestDto } from './dtos/request/update-player-request.dto';

@Injectable()
export class PlayersService {
  create(createPlayerDto: CreatePlayerRequestDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return `This action returns all players`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerRequestDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}

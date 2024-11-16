import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';

@Injectable()
export class GetOnePlayerUseCase {
  constructor(private readonly playersGatewayAdapter: PlayersGatewayAdapter) {}

  async execute(id: number) {
    const player = await this.playersGatewayAdapter.findOne({
      where: { id },
    });
    if (!player) throw new NotFoundException('Jogador não encontrado');

    return player;
  }
}

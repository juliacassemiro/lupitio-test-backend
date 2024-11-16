import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';

@Injectable()
export class DeletePlayerUseCase {
  constructor(private readonly playersGatewayAdapter: PlayersGatewayAdapter) {}

  async execute(id: number) {
    const player = await this.playersGatewayAdapter.findOne({
      where: { id },
    });
    if (!player) throw new NotFoundException('Jogador não encontrado');

    await this.playersGatewayAdapter.delete(player.id);

    return { message: 'Jogador excluído com sucesso' };
  }
}

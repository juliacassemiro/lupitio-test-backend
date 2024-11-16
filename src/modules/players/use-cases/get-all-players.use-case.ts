import { Injectable } from '@nestjs/common';
import { PlayersGatewayAdapter } from 'src/common/database/adapters/players-gateway.adapter';

@Injectable()
export class GetAllPlayerUseCase {
  constructor(private readonly playersGatewayAdapter: PlayersGatewayAdapter) {}

  async execute() {
    return await this.playersGatewayAdapter.find();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from 'src/common/database/entities/player.entity';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class PlayersGatewayAdapter {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
  ) {}

  async create(data: DeepPartial<PlayerEntity>): Promise<PlayerEntity> {
    const entity = this.playerRepository.create(data);
    return await this.playerRepository.save(entity);
  }

  async update(
    id: number,
    data: QueryDeepPartialEntity<PlayerEntity>,
  ): Promise<PlayerEntity> {
    await this.playerRepository.update(id, data);
    return await this.playerRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.playerRepository.delete(id);
  }

  async find(
    params?: FindManyOptions<PlayerEntity>,
  ): Promise<Array<PlayerEntity>> {
    return await this.playerRepository.find(params);
  }

  async findOne(params: FindOneOptions<PlayerEntity>): Promise<PlayerEntity> {
    return await this.playerRepository.findOne(params);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from 'src/common/database/entities/team.entity';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class TeamsGatewayAdapter {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>,
  ) {}

  async create(data: DeepPartial<TeamEntity>): Promise<TeamEntity> {
    const entity = this.teamRepository.create(data);
    return await this.teamRepository.save(entity);
  }

  async update(
    id: number,
    data: QueryDeepPartialEntity<TeamEntity>,
  ): Promise<TeamEntity> {
    await this.teamRepository.update(id, data);
    return await this.teamRepository.findOne({ where: { id } });
  }

  async delete(entity: TeamEntity): Promise<void> {
    await this.teamRepository.delete(entity);
  }

  async find(params: FindManyOptions<TeamEntity>): Promise<Array<TeamEntity>> {
    return await this.teamRepository.find(params);
  }

  async findOne(params: FindOneOptions<TeamEntity>): Promise<TeamEntity> {
    return await this.teamRepository.findOne(params);
  }
}

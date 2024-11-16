import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from 'src/common/database/entities/team.entity';
import { PaginatedRequestDto } from 'src/shared/dtos/request/paginated-request.dto';
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

  async delete(id: number): Promise<void> {
    await this.teamRepository.delete(id);
  }

  async find(params?: FindManyOptions<TeamEntity>): Promise<Array<TeamEntity>> {
    return await this.teamRepository.find(params);
  }

  async findOne(params: FindOneOptions<TeamEntity>): Promise<TeamEntity> {
    return await this.teamRepository.findOne(params);
  }

  async findPaginated(dto: PaginatedRequestDto) {
    const [data, total] = await this.teamRepository.findAndCount({
      skip: (dto.page - 1) * dto.limit,
      take: dto.limit,
    });

    return {
      data,
      total,
      page: dto.page,
      limit: dto.limit,
      totalPages: Math.ceil(total / dto.limit),
    };
  }
}

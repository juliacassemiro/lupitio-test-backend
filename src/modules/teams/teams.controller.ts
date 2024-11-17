import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import * as multer from 'multer';
import { CreateTeamRequestDto } from './dtos/request/create-team-request.dto';
import { UpdateTeamRequestDto } from './dtos/request/update-team-request.dto';
import { CreateTeamUseCase } from './use-cases/create-team.use-case';
import { DeleteTeamUseCase } from './use-cases/delete-team.use-case';
import { GetAllTeamsUseCase } from './use-cases/get-all-teams.use-case';
import { GetOneTeamUseCase } from './use-cases/get-one-team.use-case';
import { UpdateTeamUseCase } from './use-cases/update-team.use-case';

@Controller('teams')
export class TeamsController {
  constructor(
    private readonly createTeamUseCase: CreateTeamUseCase,
    private readonly deleteTeamUseCase: DeleteTeamUseCase,
    private readonly getAllTeamsUseCase: GetAllTeamsUseCase,
    private readonly getOneTeamUseCase: GetOneTeamUseCase,
    private readonly updateTeamUseCase: UpdateTeamUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar um time' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        name: { type: 'string' },
        adress: { type: 'string' },
      },
      required: ['file', 'name', 'adress'],
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
    }),
  )
  async create(
    @Body() dto: CreateTeamRequestDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.createTeamUseCase.execute(
      dto,
      file.buffer,
      file.mimetype,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os times' })
  async getAll() {
    return await this.getAllTeamsUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Exibir um time' })
  async getOne(@Param('id', new ParseIntPipe()) id: number) {
    return await this.getOneTeamUseCase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Editar um time' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        name: { type: 'string' },
        adress: { type: 'string' },
      },
      required: [],
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
    }),
  )
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: UpdateTeamRequestDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.updateTeamUseCase.execute(
      id,
      dto,
      file.buffer,
      file.mimetype,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um time' })
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return await this.deleteTeamUseCase.execute(id);
  }
}

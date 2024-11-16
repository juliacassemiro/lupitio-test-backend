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
import { CreatePlayerRequestDto } from './dtos/request/create-player-request.dto';
import { UpdatePlayerRequestDto } from './dtos/request/update-player-request.dto';
import { CreatePlayerUseCase } from './use-cases/create-player.use-case';
import { DeletePlayerUseCase } from './use-cases/delete-player.use-case';
import { GetAllPlayerUseCase } from './use-cases/get-all-players.use-case';
import { GetOnePlayerUseCase } from './use-cases/get-one-player.use-case';
import { UpdatePlayerUseCase } from './use-cases/update-player.use-case';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly createPlayerUseCase: CreatePlayerUseCase,
    private readonly updatePlayerUseCase: UpdatePlayerUseCase,
    private readonly getOnePlayerUseCase: GetOnePlayerUseCase,
    private readonly getAllPlayerUseCase: GetAllPlayerUseCase,
    private readonly deletePlayerUseCase: DeletePlayerUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar um jogador' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        name: { type: 'string' },
        age: { type: 'number' },
        teamId: { type: 'number' },
      },
      required: ['file', 'name', 'age', 'teamId'],
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
    }),
  )
  async create(
    @Body() dto: CreatePlayerRequestDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.createPlayerUseCase.execute(dto, file.buffer);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os jogadores' })
  async getAll() {
    return this.getAllPlayerUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Exibir um jogador' })
  async getOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.getOnePlayerUseCase.execute(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        name: { type: 'string' },
        age: { type: 'number' },
        teamId: { type: 'number' },
      },
      required: [],
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
    }),
  )
  @ApiOperation({ summary: 'Editar um jogador' })
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: UpdatePlayerRequestDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.updatePlayerUseCase.execute(id, dto, file?.buffer);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um jogador' })
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.deletePlayerUseCase.execute(id);
  }
}

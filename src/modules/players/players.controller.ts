import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
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
  async create(@Body() dto: CreatePlayerRequestDto) {
    return this.createPlayerUseCase.execute(dto);
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
  @ApiOperation({ summary: 'Editar um jogador' })
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: UpdatePlayerRequestDto,
  ) {
    return this.updatePlayerUseCase.execute(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um jogador' })
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.deletePlayerUseCase.execute(id);
  }
}

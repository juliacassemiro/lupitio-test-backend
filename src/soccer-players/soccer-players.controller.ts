import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoccerPlayersService } from './soccer-players.service';
import { CreateSoccerPlayerDto } from './dto/create-soccer-player.dto';
import { UpdateSoccerPlayerDto } from './dto/update-soccer-player.dto';

@Controller('soccer-players')
export class SoccerPlayersController {
  constructor(private readonly soccerPlayersService: SoccerPlayersService) {}

  @Post()
  create(@Body() createSoccerPlayerDto: CreateSoccerPlayerDto) {
    return this.soccerPlayersService.create(createSoccerPlayerDto);
  }

  @Get()
  findAll() {
    return this.soccerPlayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soccerPlayersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoccerPlayerDto: UpdateSoccerPlayerDto) {
    return this.soccerPlayersService.update(+id, updateSoccerPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soccerPlayersService.remove(+id);
  }
}

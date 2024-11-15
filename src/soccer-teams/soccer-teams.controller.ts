import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoccerTeamsService } from './soccer-teams.service';
import { CreateSoccerTeamDto } from './dto/create-soccer-team.dto';
import { UpdateSoccerTeamDto } from './dto/update-soccer-team.dto';

@Controller('soccer-teams')
export class SoccerTeamsController {
  constructor(private readonly soccerTeamsService: SoccerTeamsService) {}

  @Post()
  create(@Body() createSoccerTeamDto: CreateSoccerTeamDto) {
    return this.soccerTeamsService.create(createSoccerTeamDto);
  }

  @Get()
  findAll() {
    return this.soccerTeamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soccerTeamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoccerTeamDto: UpdateSoccerTeamDto) {
    return this.soccerTeamsService.update(+id, updateSoccerTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soccerTeamsService.remove(+id);
  }
}

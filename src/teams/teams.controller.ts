import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTeamRequestDto } from './dtos/request/create-team-request.dto';
import { UpdateTeamRequestDto } from './dtos/request/update-team-request.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body() createTeamRequestDto: CreateTeamRequestDto) {
    return this.teamsService.create(createTeamRequestDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeamRequestDto: UpdateTeamRequestDto,
  ) {
    return this.teamsService.update(+id, updateTeamRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsService.remove(+id);
  }
}

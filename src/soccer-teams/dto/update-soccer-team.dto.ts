import { PartialType } from '@nestjs/mapped-types';
import { CreateSoccerTeamDto } from './create-soccer-team.dto';

export class UpdateSoccerTeamDto extends PartialType(CreateSoccerTeamDto) {}

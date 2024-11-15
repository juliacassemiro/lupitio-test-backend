import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamRequestDto } from './create-team-request.dto';

export class UpdateTeamRequestDto extends PartialType(CreateTeamRequestDto) {}

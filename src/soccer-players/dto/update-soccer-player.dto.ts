import { PartialType } from '@nestjs/mapped-types';
import { CreateSoccerPlayerDto } from './create-soccer-player.dto';

export class UpdateSoccerPlayerDto extends PartialType(CreateSoccerPlayerDto) {}

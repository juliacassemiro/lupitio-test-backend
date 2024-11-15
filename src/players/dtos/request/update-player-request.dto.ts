import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerRequestDto } from './create-player-request.dto';

export class UpdatePlayerRequestDto extends PartialType(
  CreatePlayerRequestDto,
) {}

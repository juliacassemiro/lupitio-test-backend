import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreatePlayerRequestDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  age: number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  teamId: number;
}

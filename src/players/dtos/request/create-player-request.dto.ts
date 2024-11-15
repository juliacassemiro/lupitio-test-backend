import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
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
  @IsNumber({ maxDecimalPlaces: 0 })
  age: number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  teamId: number;
}

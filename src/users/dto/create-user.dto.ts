import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  readonly id: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  readonly password: string;
}

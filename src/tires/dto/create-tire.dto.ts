import { Type } from 'class-transformer';
import { IsString, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UserTire {
  @ApiProperty({
    type: String,
  })
  @IsString()
  id!: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  trimId!: number;
}

export class CreateTireDto {
  @ApiProperty({ type: [UserTire] })
  @IsArray()
  @Type(() => UserTire)
  @ValidateNested({ each: true })
  readonly data: UserTire[];
}

import { Type } from 'class-transformer';
import { IsString, IsArray, IsNumber, ValidateNested } from 'class-validator';

class UserTire {
  @IsString()
  id!: string;

  @IsNumber()
  trimId!: number;
}

export class CreateTireDto {
  @IsArray()
  @Type(() => UserTire)
  @ValidateNested({ each: true })
  readonly data: UserTire[];
}

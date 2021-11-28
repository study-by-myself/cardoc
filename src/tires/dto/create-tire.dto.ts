import { IsString, IsArray, IsNumber, ValidateNested } from 'class-validator';

class UserTire {
  @IsString()
  id!: string;

  @IsNumber()
  trimId!: number;
}

export class CreateTireDto {
  @IsArray()
  @ValidateNested({ each: true })
  readonly data: UserTire[];
}

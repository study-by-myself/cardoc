import { IsString } from 'class-validator';

class UserTire {
  id: string;
  trimId: number;
}

export class CreateTireDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;
}

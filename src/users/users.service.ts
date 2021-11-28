import { User } from './entities/user.entity';
import {
  ForbiddenException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const { id, password } = createUserDto;
    const user = await this.usersRepository.findOne({ nickname: id });
    if (user) {
      throw new BadRequestException({ message: '중복된 ID 입니다' });
    }
    const hashed = await bcrypt.hash(password, 10);
    await this.usersRepository.save({
      nickname: id,
      password: hashed,
    });
    return { access_token: this.jwtService.sign({ id }) };
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findByNickname(id: string): Promise<User> {
    const res = await this.usersRepository.findOne({ where: { nickname: id } });
    if (!res) {
      throw new BadRequestException({ message: '존재하지 않는 ID입니다' });
    }
    return res;
  }
}

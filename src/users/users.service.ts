import { User } from './entities/user.entity';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { id, password } = createUserDto;
    const user = await this.usersRepository.findOne({ nickname: id });
    if (user) {
      throw new ForbiddenException({ description: '중복된 id 입니다' });
    }
    const hashed = await bcrypt.hash(password, 10);
    return await this.usersRepository.save({ nickname: id, password: hashed });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findByNickname(id: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { nickname: id } });
  }
}

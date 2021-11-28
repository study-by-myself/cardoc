import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
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

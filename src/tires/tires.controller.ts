import { JwtAuthGuard } from './../users/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { TiresService } from './tires.service';
import { CreateTireDto } from './dto/create-tire.dto';

@Controller('tires')
export class TiresController {
  constructor(private readonly tiresService: TiresService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTireDto: CreateTireDto) {
    try {
      await this.tiresService.create(createTireDto);
    } catch (e) {
      throw new BadRequestException({ message: '정보가 부족합니다' });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.tiresService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.tiresService.findOne(id);
    } catch (e) {
      throw e;
    }
  }
}

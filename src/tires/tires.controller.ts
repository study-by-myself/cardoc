import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { TiresService } from './tires.service';
import { CreateTireDto } from './dto/create-tire.dto';

@Controller('tires')
export class TiresController {
  constructor(private readonly tiresService: TiresService) {}

  @Post()
  async create(@Body() createTireDto: CreateTireDto) {
    try {
      await this.tiresService.create(createTireDto);
    } catch (e) {
      throw new BadRequestException({ message: '정보가 부족합니다' });
    }
  }

  @Get()
  async findAll() {
    return await this.tiresService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.tiresService.findOne(id);
    } catch (e) {
      throw e;
    }
  }
}

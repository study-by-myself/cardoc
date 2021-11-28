import { Controller, Get, Post, Body } from '@nestjs/common';
import { TiresService } from './tires.service';
import { CreateTireDto } from './dto/create-tire.dto';

@Controller('tires')
export class TiresController {
  constructor(private readonly tiresService: TiresService) {}

  @Post()
  create(@Body() createTireDto: CreateTireDto) {
    return this.tiresService.create(createTireDto);
  }

  @Get()
  findAll() {
    return this.tiresService.findAll();
  }
}

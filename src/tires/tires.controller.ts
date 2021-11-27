import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiresService } from './tires.service';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTireDto: UpdateTireDto) {
    return this.tiresService.update(+id, updateTireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiresService.remove(+id);
  }
}

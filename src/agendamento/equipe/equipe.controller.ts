import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EquipeService } from './equipe.service';

@Controller('equipe')
export class EquipeController {
  constructor(private equipeService: EquipeService) {}

  @Get()
  findAll() {
    return this.equipeService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    return this.equipeService.findUnique(id);
  }

  @Post()
  create(@Body() data) {
    return this.equipeService.create(data);
  }
}

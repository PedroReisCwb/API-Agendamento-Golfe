import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HorarioService } from './horario.service';

@Controller('horario')
export class HorarioController {
  constructor(private horarioService: HorarioService) {}

  @Get()
  findAll() {
    return this.horarioService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    return this.horarioService.findUnique(id);
  }

  @Post()
  create(@Body() data) {
    return this.horarioService.create(data);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConvidadoService } from './convidado.service';

@Controller('convidado')
export class ConvidadoController {
  constructor(private convidadoService: ConvidadoService) {}

  @Get()
  findAll() {
    return this.convidadoService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    return this.convidadoService.findUnique(id);
  }

  @Post()
  create(@Body() data) {
    return this.convidadoService.create(data);
  }
}

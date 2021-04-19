/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JogadorService } from './jogador.service';

@Controller('jogador')
export class JogadorController {
    constructor(
        private readonly jogadorService: JogadorService
    ) {}

    @Get()
    findAll() {
      return this.jogadorService.findAll();
    }
  
    @Get(':id')
    findUnique(@Param('id') id: number) {
      return this.jogadorService.findUnique(id);
    }
  
    @Post()
    create(@Body() data) {
      return this.jogadorService.create(data);
    }
}

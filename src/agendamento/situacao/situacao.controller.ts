import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SituacaoService } from './situacao.service';

@Controller('situacao')
export class SituacaoController {
  constructor(private situacaoService: SituacaoService) {}

  @Get()
  findAll() {
    return this.situacaoService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    return this.situacaoService.findUnique(id);
  }

  @Post()
  create(@Body() data) {
    return this.situacaoService.create(data);
  }
}

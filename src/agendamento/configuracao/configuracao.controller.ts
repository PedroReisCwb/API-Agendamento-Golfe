import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfiguracaoService } from './configuracao.service';

@Controller('configuracao')
export class ConfiguracaoController {
  constructor(private configuracaoService: ConfiguracaoService) {}

  @Get()
  findAll() {
    return this.configuracaoService.findAll();
  }

  @Get('agenda')
  findHistoryDay() {
    return this.configuracaoService.buscarAgendas();
  }

  @Post()
  create(@Body() data) {
    return this.configuracaoService.create(data);
  }
}

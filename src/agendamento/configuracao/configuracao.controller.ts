/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConfiguracaoService } from './configuracao.service';

@Controller('configuracao')
export class ConfiguracaoController {
  constructor(private configuracaoService: ConfiguracaoService) {}

  @Get()
  findAll() {
    return this.configuracaoService.findAll();
  }

  /*@Get('agenda/:equipe/:dia/:id')
  buscarAgendas(@Param('equipe') equipe: string, @Param('dia') dia: string, @Param('id') id: number) {
    return this.configuracaoService.buscarAgendas(equipe, dia, id);
  }*/

  @Get('agenda/:equipe/:dia/:id')
  buscarHorariosAgenda(@Param('equipe') equipe: string, @Param('dia') dia: string, @Param('id') id: number) {
    return this.configuracaoService.buscarHorariosAgenda(equipe, dia, id);
  }

  @Get('agenda/:dia/:id')
  buscarHorariosAgendaTotal(@Param('dia') dia: string, @Param('id') id: number) {
    return this.configuracaoService.buscarHorariosAgendaTotal(dia, id);
  }

  /*@Get('agenda/:equipe/:dia')
  buscarAgenda(@Param('equipe') equipe: string, @Param('dia') dia: string) {​​​​​​​​​
    return this.configuracaoService.buscarAgenda(equipe, dia);
  }*/

  @Post()
  create(@Body() data) {
    return this.configuracaoService.create(data);
  }
}

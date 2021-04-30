import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HistoricoService } from './historico.service';

@Controller('historico')
export class HistoricoController {
  constructor(private historicoService: HistoricoService) {}

  /*@Get()
  findAll() {
    return this.historicoService.findAll();
  }*/

  @Post()
  create(@Body() data) {
    return this.historicoService.create(data);
  }

  /*@Get('/:dia')
  buscarHistorico(@Param('dia') dia: string) {
    return this.historicoService.buscarHistorico(dia);
  }*/

  @Get('teste')
  buscarJogadores(){
    return this.historicoService.buscarJogadores();
  }

  @Get(':id')
  buscarHistoricoPrisma(@Param('id') id: number) {
    return this.historicoService.buscarHistoricoPrisma(id);
  }

  @Get('participantes/:id')
  buscarParticipantes(@Param('id') id: number) {
    return this.historicoService.buscarParticipantes(id);
  }

  @Get('proximo/:id')
  buscarProximoJogo(@Param('id') id: number) {
    return this.historicoService.buscarProximoJogo(id);
  }

  /*@Get('jogador/:id')
  buscarHistoricoJogador(@Param('id') id: number) {
    return this.historicoService.buscarHistoricoJogador(id);
  }*/

  /*@Get('prisma/:dia/:id')
  buscarHistoricoJogadorPrisma(
    @Param('dia') dia: string,
    @Param('id') id: number,
  ) {
    return this.historicoService.buscarHistoricoJogadorPrisma(dia, id);
  }*/

  @Post('gravar/:dia')
  gravarReserva(@Body() data, @Param('dia') dia: string) {
    return this.historicoService.gravarReserva(data, dia);
  }

  @Post('atualiza/:id')
  atualizaHistorico(@Param('id') id: number, @Body() data) {
    return this.historicoService.atualizaHistorico(id, data);
  }
}

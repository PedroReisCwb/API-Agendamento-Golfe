import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HistoricoService } from './historico.service';

@Controller('historico')
export class HistoricoController {
  constructor(private historicoService: HistoricoService) {}

  @Get()
  findAll() {
    return this.historicoService.findAll();
  }

  @Post()
  create(@Body() data) {
    return this.historicoService.create(data);
  }

  @Get('/:dia')
  buscarHistorico(@Param('dia') dia: string) {
    return this.historicoService.buscarHistorico(dia);
  }

  @Get('participantes/:id')
  buscarParticipantes(@Param('id') id: number) {
    return this.historicoService.buscarParticipantes(id);
  }

  @Get('jogador/:dia/:id')
  buscarHistoricoJogador(@Param('dia') dia: string, @Param('id') id: number) {
    return this.historicoService.buscarHistoricoJogador(dia, id);
  }

  @Get('prisma/:dia/:id')
  buscarHistoricoJogadorPrisma(@Param('dia') dia: string, @Param('id') id: number) {
    return this.historicoService.buscarHistoricoJogadorPrisma(dia, id);
  }

  @Post('atualiza/:id')
  atualizaHistorico(@Param('id') id: number, @Body() data) {
    return this.historicoService.atualizaHistorico(id, data);
  }
}

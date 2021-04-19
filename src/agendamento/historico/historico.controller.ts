import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get('hoje')
  findHistoryDay() {
    return this.historicoService.findHistoryDay();
  }
}

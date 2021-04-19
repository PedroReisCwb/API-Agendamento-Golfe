import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AgendaService } from './agenda.service';

@Controller('agenda')
export class AgendaController {
  constructor(private agendaService: AgendaService) {}

  @Get()
  findAll() {
    return this.agendaService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    return this.agendaService.findUnique(id);
  }

  @Post()
  create(@Body() data) {
    return this.agendaService.create(data);
  }

  @Post('update/:id')
  updateAgenda(@Param('id') id: number, @Body() data) {
    return this.agendaService.updateAgenda(id, data);
  }
}

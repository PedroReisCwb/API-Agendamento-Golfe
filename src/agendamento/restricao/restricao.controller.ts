import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RestricaoService } from './restricao.service';

@Controller('restricao')
export class RestricaoController {
  constructor(private restricaoService: RestricaoService) {}

  @Get()
  findAll() {
    return this.restricaoService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    return this.restricaoService.findUnique(id);
  }

  @Post()
  create(@Body() data) {
    return this.restricaoService.create(data);
  }
}

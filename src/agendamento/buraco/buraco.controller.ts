import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuracoService } from './buraco.service';

@Controller('buraco')
export class BuracoController {
  constructor(private buracoService: BuracoService) {}

  @Get()
  findAll() {
    return this.buracoService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    return this.buracoService.findUnique(id);
  }

  @Post()
  create(@Body() data) {
    return this.buracoService.create(data);
  }
}

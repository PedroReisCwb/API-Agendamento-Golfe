import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BuracoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_BURACO.findMany();
  }

  async findUnique(id: number) {
    return this.prismaService.aGENDAMENTO_BURACO.findUnique({
      where: { id: +id },
    });
  }

  async create(
    @Body()
    { numero_buraco, descricao, status, dt_status, id_agendamento_situacao },
  ) {
    return this.prismaService.aGENDAMENTO_BURACO.create({
      data: {
        numero_buraco,
        descricao,
        status,
        dt_status,
        id_agendamento_situacao,
      },
    });
  }
}

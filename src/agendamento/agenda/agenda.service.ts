import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AgendaService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_AGENDA_PERIODO.findMany();
  }

  async findUnique(id: number) {
    return this.prismaService.aGENDAMENTO_AGENDA_PERIODO.findUnique({
      where: { id: +id },
    });
  }

  async updateAgenda(id: number, data) {
    return this.prismaService.aGENDAMENTO_AGENDA_PERIODO.update({
      where: {
        id: +id,
      },
      data: data,
    });
  }

  async create(
    @Body()
    {
      descricao,
      data_inicio,
      data_fim,
      data_hora_liberacao,
      status,
      dt_status,
      id_agendamento_situacao,
    },
  ) {
    return this.prismaService.aGENDAMENTO_AGENDA_PERIODO.create({
      data: {
        descricao,
        data_inicio,
        data_fim,
        data_hora_liberacao,
        status,
        dt_status,
        id_agendamento_situacao,
      },
    });
  }
}

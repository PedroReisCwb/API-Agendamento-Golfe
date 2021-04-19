import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RestricaoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_RESTRICAO.findMany();
  }

  async findUnique(id: number) {
    return this.prismaService.aGENDAMENTO_RESTRICAO.findUnique({
      where: { id: +id },
    });
  }

  async create(
    @Body()
    {
      data_inicio,
      data_fim,
      msg_resumida,
      msg_detalhada,
      bloquear,
      status,
      dt_status,
      id_agendamento_situacao,
      id_agendamento_agenda,
    },
  ) {
    return this.prismaService.aGENDAMENTO_RESTRICAO.create({
      data: {
        data_inicio,
        data_fim,
        msg_resumida,
        msg_detalhada,
        bloquear,
        status,
        dt_status,
        id_agendamento_situacao,
        id_agendamento_agenda,
      },
    });
  }
}

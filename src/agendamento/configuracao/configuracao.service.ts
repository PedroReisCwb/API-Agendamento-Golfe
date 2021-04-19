import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConfiguracaoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_CONFIGURACAO.findMany();
  }

  async buscarAgendas() {
    return this.prismaService.aGENDAMENTO_CONFIGURACAO.findMany({
      where: {
        status: {
          not: 'E',
        },
      },
      select: {
        AGENDAMENTO_AGENDA_PERIODO: {
          select: {
            data_inicio: true,
            data_fim: true,
            data_hora_liberacao: true,
            descricao: true,
          },
        },
        AGENDAMENTO_BURACO: {
          select: {
            numero_buraco: true,
          },
        },
        AGENDAMENTO_EQUIPE: {
          select: {
            descricao: true,
          },
        },
        AGENDAMENTO_HORARIO: {
          select: {
            horario: true,
          },
        },
      },
    });
  }

  async create(
    @Body()
    {
      status,
      dt_status,
      id_agendamento_agenda,
      id_agendamento_buraco,
      id_agendamento_equipe,
      id_agendamento_horario,
    },
  ) {
    return this.prismaService.aGENDAMENTO_CONFIGURACAO.create({
      data: {
        status,
        dt_status,
        id_agendamento_agenda,
        id_agendamento_buraco,
        id_agendamento_equipe,
        id_agendamento_horario,
      },
    });
  }
}

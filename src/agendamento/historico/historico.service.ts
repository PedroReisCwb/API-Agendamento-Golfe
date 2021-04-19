import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistoricoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_HISTORICO.findMany();
  }

  async findHistoryDay() {
    const data = new Date();
    const hoje =
      data.getFullYear() + '-0' + data.getMonth() + '-' + data.getDate();
    console.log(hoje);
    return this.prismaService.aGENDAMENTO_HISTORICO.findMany({
      where: {
        data_reserva: new Date('2021-04-18'),
        status: {
          not: 'E',
        },
        AGENDAMENTO_JOGADOR: {
          status: {
            not: 'E',
          },
        },
        AGENDAMENTO_AGENDA_PERIODO: {
          status: {
            not: 'E',
          },
        },
        AGENDAMENTO_BURACO: {
          status: {
            not: 'E',
          },
        },
        AGENDAMENTO_EQUIPE: {
          status: {
            not: 'E',
          },
        },
        AGENDAMENTO_HORARIO: {
          status: {
            not: 'E',
          },
        },
      },
      select: {
        id: true,
        id_agendamento_historico: true,
        data_reserva: true,
        data_registro: true,
        data_acesso: true,
        AGENDAMENTO_JOGADOR: {
          select: {
            categoria: true,
            matricula: true,
            num_dep: true,
          },
        },
        AGENDAMENTO_AGENDA_PERIODO: {
          select: {
            descricao: true,
          },
        },
        AGENDAMENTO_BURACO: {
          select: {
            descricao: true,
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
      data_reserva,
      data_registro,
      data_acesso,
      status,
      dt_status,
      id_agendamento_historico,
      id_agendamento_jogador,
      id_agendamento_agenda,
      id_agendamento_buraco,
      id_agendamento_equipe,
      id_agendamento_horario,
    },
  ) {
    return this.prismaService.aGENDAMENTO_HISTORICO.create({
      data: {
        data_reserva,
        data_registro,
        data_acesso,
        status,
        dt_status,
        id_agendamento_historico,
        id_agendamento_jogador,
        id_agendamento_agenda,
        id_agendamento_buraco,
        id_agendamento_equipe,
        id_agendamento_horario,
      },
    });
  }
}

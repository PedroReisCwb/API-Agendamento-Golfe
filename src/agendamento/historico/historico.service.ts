/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import Moment from 'moment';

@Injectable()
export class HistoricoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_HISTORICO.findMany();
  }

  /*async buscarHistorico(dia: string) {
    const diaParam = dia == 'hoje' ? 'GETDATE()' : 'GETDATE()+1';
    const query = `SELECT ahis.data_reserva, ahis.data_registro, ahis.data_acesso, ahis.status, aj.categoria, aj.matricula, aj.num_dep, ahis.id_agendamento_historico, ag.descricao, `
      + `			ag.data_inicio, ag.data_fim, ag.data_hora_liberacao, ab.numero_buraco, ae.descricao, ah.horario `
      + `FROM AGENDAMENTO_HISTORICO ahis `
      + `INNER JOIN AGENDAMENTO_JOGADOR aj ON aj.id = ahis.id_agendamento_jogador `
      + `INNER JOIN AGENDAMENTO_AGENDA_PERIODO ag ON ag.id = ahis.id_agendamento_agenda `
      + `INNER JOIN AGENDAMENTO_BURACO ab ON ab.id = ahis.id_agendamento_buraco `
      + `INNER JOIN AGENDAMENTO_EQUIPE ae ON ae.id = ahis.id_agendamento_equipe `
      + `INNER JOIN AGENDAMENTO_HORARIO ah ON ah.id = ahis.id_agendamento_horario `
      + `WHERE ahis.status <> 'E' `
      + `	AND aj.status <> 'E' `
      + `	AND ag.status <> 'E' `
      + `	AND ab.status <> 'E' `
      + `	AND ae.status <> 'E' `
      + `	AND ah.status <> 'E' `
      + `	AND CAST(ahis.data_reserva AS DATE) = CONVERT(DATE, ${diaParam}) `;

    //console.log(query)

    return this.prismaService.$queryRaw(query);
  }*/

  /*async buscarHistoricoJogador(id: number) {
    //const diaParam = dia == 'hoje' ? 'GETDATE()' : 'GETDATE()+1';
    const query = `SELECT ahis.id as id_historico, ahis.data_reserva, ahis.data_registro, ahis.data_acesso, ahis.status, aj.categoria, aj.matricula, aj.num_dep, ahis.id_agendamento_historico, ag.descricao, `
      + `			ag.id, ag.data_inicio, ag.data_fim, ag.data_hora_liberacao, ab.numero_buraco, ae.descricao, ah.horario `
      + `FROM AGENDAMENTO_HISTORICO ahis `
      + `INNER JOIN AGENDAMENTO_JOGADOR aj ON aj.id = ahis.id_agendamento_jogador `
      + `INNER JOIN AGENDAMENTO_AGENDA_PERIODO ag ON ag.id = ahis.id_agendamento_agenda `
      + `INNER JOIN AGENDAMENTO_BURACO ab ON ab.id = ahis.id_agendamento_buraco `
      + `INNER JOIN AGENDAMENTO_EQUIPE ae ON ae.id = ahis.id_agendamento_equipe `
      + `INNER JOIN AGENDAMENTO_HORARIO ah ON ah.id = ahis.id_agendamento_horario `
      + `WHERE ahis.status <> 'E' `
      + `	AND aj.status <> 'E' `
      + `	AND ag.status <> 'E' `
      + `	AND ab.status <> 'E' `
      + `	AND ae.status <> 'E' `
      + `	AND ah.status <> 'E' `
      + `	AND ahis.id_agendamento_jogador = ${id} `;

    //console.log(query)

    return this.prismaService.$queryRaw(query);
  }*/

  async buscarProximoJogo(id: number) {
    const query = `SELECT TOP 1 ahis.data_reserva, ah.horario, ae.descricao, ab.numero_buraco FROM AGENDAMENTO_HISTORICO ahis
                      INNER JOIN AGENDAMENTO_HORARIO ah ON ahis.id_agendamento_horario = ah.id
                      INNER JOIN AGENDAMENTO_EQUIPE ae ON ahis.id_agendamento_equipe = ae.id
                      INNER JOIN AGENDAMENTO_BURACO ab ON ahis.id_agendamento_buraco = ab.id
                      WHERE ahis.id_agendamento_jogador=${id}
                      AND CAST(ah.horario AS time) > CAST(GETDATE() AS time)
                      AND CAST(ahis.data_reserva AS date) >= CAST(GETDATE() AS date)
                      AND ahis.status <> 'E'
                      AND ab.status <> 'E'
                      AND ae.status <> 'E'
                      AND ah.status <> 'E'
                      ORDER BY ahis.data_reserva desc, ah.horario asc`;

    //console.log(query)

    return this.prismaService.$queryRaw(query);
  }

  async gravarReserva(
    @Body() {
      ids_jogadores,
      nomes_jogadores,
      id_agenda,
      id_buraco,
      id_equipe,
      id_horario,
    }, dia: string
  ) {
    
    const data = new Date();
    const _ano = data.getFullYear();
    const _mes = data.getMonth() + 1;
    const _dia = dia == 'hoje' ? data.getDate() : data.getDate()+1;
    const _mesFormatado = _mes < 10 ? '0'+_mes : _mes; 
    const _diaFormatado = _dia < 10 ? '0'+_dia : _dia;
    const dia_reserva = _diaFormatado + '/' + _mesFormatado + '/' + _ano;
    

    const query = `'${ids_jogadores}', ${id_agenda}, ${id_buraco}, ${id_equipe}, ${id_horario}, '${dia}' `;
    
    return this.prismaService.$queryRaw(`EXEC AGENDAMENTO_GRAVAR ${query} `);
  }

  async buscarJogadores(){
    return this.prismaService.aGENDAMENTO_HISTORICO.findMany({
      where:{
        id: 5
      },
      select:{
        data_reserva:true,
      }
    })
  }

  async buscarHistoricoPrisma(id: number) {
    return this.prismaService.aGENDAMENTO_HISTORICO.findMany({
      where: {
        status: { not: 'E' },
        id_agendamento_jogador: +id,
        AGENDAMENTO_AGENDA_PERIODO: { status: { not: 'E' } },
        AGENDAMENTO_BURACO:         { status: { not: 'E' } },
        AGENDAMENTO_EQUIPE:         { status: { not: 'E' } },
        AGENDAMENTO_HORARIO:        { status: { not: 'E' } },
        AGENDAMENTO_JOGADOR:        { status: { not: 'E' } },
      },
      select: {
        id: true,
        id_agendamento_historico: true,
        data_reserva: true,
        data_registro: true,
        status: true,
        AGENDAMENTO_JOGADOR: {
          select: {
            id: true,
            categoria: true,
            matricula: true,
            num_dep: true,
            nome:true,
          },
        },
        AGENDAMENTO_AGENDA_PERIODO: {
          select: {
            id: true,
            data_inicio: true,
            data_fim: true,
            data_hora_liberacao: true,
            descricao: true,
          },
        },
        AGENDAMENTO_BURACO: {
          select: {
            numero_buraco: true,
            descricao: true,
          },
        },
        AGENDAMENTO_EQUIPE: {
          select: {
            id: true,
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

  /*async buscarHistoricoJogadorPrisma(dia: string, id: number) {
    const data = new Date();
    const _ano = data.getFullYear();
    const _mes = data.getMonth() + 1;
    const _dia = dia == 'hoje' ? data.getDate() : data.getDate()+1;
    const _mesFormatado = _mes < 10 ? '0'+_mes : _mes; 
    const _diaFormatado = _dia < 10 ? '0'+_dia : _dia;
    const hoje = _ano + '-' + _mesFormatado + '-' + _diaFormatado;
    
    return this.prismaService.aGENDAMENTO_HISTORICO.findMany({
      where: {
        data_reserva: new Date(hoje),
        status: { not: 'E' },
        AGENDAMENTO_AGENDA_PERIODO: { status: { not: 'E' } },
        AGENDAMENTO_BURACO:         { status: { not: 'E' } },
        AGENDAMENTO_EQUIPE:         { status: { not: 'E' } },
        AGENDAMENTO_HORARIO:        { status: { not: 'E' } },
        AGENDAMENTO_JOGADOR:        { status: { not: 'E' }, id: +id },
      },
      select: {
        id: true,
        id_agendamento_historico: true,
        data_reserva: true,
        data_registro: true,
        data_acesso: true,
        status: true,
        AGENDAMENTO_JOGADOR: {
          select: {
            categoria: true,
            matricula: true,
            num_dep: true,
          },
        },
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
    });*/

  async buscarParticipantes(id: number) {
    return this.prismaService.aGENDAMENTO_HISTORICO.findMany({
      where: {
        status: { not: 'E' }, id_agendamento_historico: +id,
        AGENDAMENTO_JOGADOR: { status: { not: 'E' } },
      },
      select: {
        AGENDAMENTO_JOGADOR: {
          select: {
            id:true,
            nome: true,
          }
        }
      }
    })
  }

  async atualizaHistorico(id: number, data) {
    return this.prismaService.aGENDAMENTO_HISTORICO.update({
      where: {
        id: +id,
      },
      data: data,
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

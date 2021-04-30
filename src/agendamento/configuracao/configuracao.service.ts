/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConfiguracaoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_CONFIGURACAO.findMany();
  }

  /*async buscarAgenda(equipe: string, dia: string) {​​
    const diaParam = dia == 'hoje' ? 'GETDATE()' : 'GETDATE()+1';
    const query = `SELECT ap.descricao, ap.data_inicio, ap.data_fim, ap.data_hora_liberacao, ab.numero_buraco, ae.descricao, ae.limite_qtde, ah.horario, ` 
      + ` CASE WHEN `
      + `   (SELECT COUNT(ahis.status) FROM AGENDAMENTO_HISTORICO ahis `
      + `     INNER JOIN AGENDAMENTO_EQUIPE ae ON ae.id = ahis.id_agendamento_equipe `
      + `   WHERE ahis.id_agendamento_horario = ah.id `
      + `     AND ae.descricao = '${equipe}' `
      + `     AND CAST(ahis.data_reserva AS date) = CONVERT(DATE, ${diaParam})) > 0 `
      + `   THEN (SELECT MAX(status) FROM AGENDAMENTO_HISTORICO WHERE id_agendamento_horario = ah.id) `
      + `   ELSE 'L' `
      + ` END AS situacao `
      + `FROM AGENDAMENTO_CONFIGURACAO ac `
      + `INNER JOIN AGENDAMENTO_AGENDA_PERIODO ap ON ap.id = ac.id_agendamento_agenda `
      + `INNER JOIN AGENDAMENTO_BURACO ab ON ac.id_agendamento_buraco = ab.id `
      + `INNER JOIN AGENDAMENTO_EQUIPE ae ON ac.id_agendamento_equipe = ae.id `
      + `INNER JOIN AGENDAMENTO_HORARIO ah ON ac.id_agendamento_horario = ah.id `
      + `WHERE ac.status <> 'E' `
      + `and ap.status <> 'E' `
      + `and ab.status <> 'E' `
      + `and ae.status <> 'E' `
      + `and ah.status <> 'E' `
      + `and ae.descricao = '${equipe}' `
  
    //console.log(query)
 
    return this.prismaService.$queryRaw(query);
  }​​​​​​​​​*/

  async buscarHorariosAgenda(equipe: string, dia: string, id: number) {​​
    const diaParam = dia == 'hoje' ? 'GETDATE()' : 'GETDATE()+1';
    const query = `DECLARE @id_agendamento_agenda INT = ${id}
      SELECT AH.ID,ah.horario, ab.numero_buraco		 
          , CASE WHEN HIST.ID_HISTORICO IS NULL THEN 'L' ELSE HIST.status END situacao
          , ISNULL([AS].descricao,'Livre') situacao_agendamento
          , ISNULL(HIST.QTDE_JOGADORES,0) qtde_jogadores
          , ISNULL(AE.limite_qtde,0) limite_equipe
      FROM AGENDAMENTO_CONFIGURACAO ac
      INNER JOIN AGENDAMENTO_HORARIO ah ON ah.id_agendamento_agenda = ac.id
      INNER JOIN AGENDAMENTO_BURACO ab ON ac.id_agendamento_buraco = ab.id
      LEFT JOIN (SELECT AH1.id_agendamento_horario
            , MIN(ah1.ID) ID_HISTORICO
            , MIN(AH1.status) STATUS
            , COUNT(*) QTDE_JOGADORES
            FROM AGENDAMENTO_HISTORICO ah1  
              LEFT JOIN AGENDAMENTO_HISTORICO AHJ ON AHJ.id_agendamento_historico = AH1.id
              LEFT JOIN AGENDAMENTO_EQUIPE AEJ on AEJ.id = ah1.id_agendamento_equipe
            WHERE  ah1.id_agendamento_agenda = @id_agendamento_agenda
              AND CAST(ah1.data_reserva AS date) = CONVERT(DATE, ${diaParam}) 
              AND AH1.STATUS <> 'E'
              and AEJ.descricao = '${equipe}'
            GROUP BY AH1.id_agendamento_horario
            ) HIST ON HIST.id_agendamento_horario = ah.id   
      LEFT JOIN AGENDAMENTO_HISTORICO HIST_AGENDAMENTO ON HIST_AGENDAMENTO.id = HIST.ID_HISTORICO
      LEFT JOIN AGENDAMENTO_EQUIPE ae ON AE.ID = HIST_AGENDAMENTO.id_agendamento_equipe
      LEFT JOIN AGENDAMENTO_SITUACAO [AS] ON [AS].status = HIST_AGENDAMENTO.status
      WHERE ac.status <> 'E'
      AND ah.status <> 'E'
      AND ah.id_agendamento_agenda = @id_agendamento_agenda `;
  
    //console.log(query)
 
    return this.prismaService.$queryRaw(query);
  }

  async buscarHorariosAgendaTotal(dia: string, id: number) {​​
    const diaParam = dia == 'hoje' ? 'GETDATE()' : 'GETDATE()+1';
    const query = `DECLARE @id_agendamento_agenda INT = ${id}
      SELECT AH.ID,ah.horario, ab.numero_buraco, ISNULL(ae.descricao,'') equipe		 
          , CASE WHEN HIST.ID_HISTORICO IS NULL THEN 'L' ELSE HIST.status END situacao
          , ISNULL([AS].descricao,'Livre') situacao_agendamento
          , ISNULL(HIST.QTDE_JOGADORES,0) qtde_jogadores
          , ISNULL(AE.limite_qtde,0) limite_equipe
      FROM AGENDAMENTO_CONFIGURACAO ac
      INNER JOIN AGENDAMENTO_HORARIO ah ON ah.id_agendamento_agenda = ac.id
      INNER JOIN AGENDAMENTO_BURACO ab ON ac.id_agendamento_buraco = ab.id
      LEFT JOIN (SELECT AH1.id_agendamento_horario
            , MIN(ah1.ID) ID_HISTORICO
            , MIN(AH1.status) STATUS
            , COUNT(*) QTDE_JOGADORES
            FROM AGENDAMENTO_HISTORICO ah1  
              LEFT JOIN AGENDAMENTO_HISTORICO AHJ ON AHJ.id_agendamento_historico = AH1.id
            WHERE  ah1.id_agendamento_agenda = @id_agendamento_agenda
              AND CAST(ah1.data_reserva AS date) = CONVERT(DATE, GETDATE()) 
              AND AH1.STATUS <> 'E'
            GROUP BY AH1.id_agendamento_horario
            ) HIST ON HIST.id_agendamento_horario = ah.id   
      LEFT JOIN AGENDAMENTO_HISTORICO HIST_AGENDAMENTO ON HIST_AGENDAMENTO.id = HIST.ID_HISTORICO
      LEFT JOIN AGENDAMENTO_EQUIPE ae ON AE.ID = HIST_AGENDAMENTO.id_agendamento_equipe
      LEFT JOIN AGENDAMENTO_SITUACAO [AS] ON [AS].status = HIST_AGENDAMENTO.status
      WHERE ac.status <> 'E'
      AND ah.status <> 'E'
      AND ah.id_agendamento_agenda = @id_agendamento_agenda 
      and hist.ID_HISTORICO is not null`;
  
    //console.log(query)
 
    return this.prismaService.$queryRaw(query);
  }

  /*async buscarAgendas(equipe: string, dia: string, id: number) {
    return this.prismaService.aGENDAMENTO_CONFIGURACAO.findMany({
      where: {
        status: { not: 'E' },
        AGENDAMENTO_EQUIPE: { status: { not: 'E' } },
        AGENDAMENTO_HORARIO: { status: { not: 'E' }, id_agendamento_agenda: +id },
      },
      select: {
        AGENDAMENTO_HORARIO: {
          select: {
            horario: true,
          }
        }
      }
    })
  }*/

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

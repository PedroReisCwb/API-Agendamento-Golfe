/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConfiguracaoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_CONFIGURACAO.findMany();
  }

  async buscarAgenda(equipe: string, dia: string) {​​
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
  }​​​​​​​​​

  async buscarHorariosAgenda(equipe: string, dia: string, id: number) {​​
      const diaParam = dia == 'hoje' ? 'GETDATE()' : 'GETDATE()+1';
    const query = `SELECT ah.horario, ` 
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
      + `INNER JOIN AGENDAMENTO_HORARIO ah ON ah.id_agendamento_agenda = ac.id `
      + `INNER JOIN AGENDAMENTO_EQUIPE ae ON ac.id_agendamento_equipe = ae.id `
      + `WHERE ac.status <> 'E' `
      + `and ae.status <> 'E' `
      + `and ah.status <> 'E' `
      + `and ah.id_agendamento_agenda = '${id}' `
  
    //console.log(query)
 
    return this.prismaService.$queryRaw(query);
  }

  /*async buscarAgendas(equipe: string, dia: string, id: number) {
    const horarios: AGENDAMENTO_HORARIO[] = await this.prismaService.aGENDAMENTO_CONFIGURACAO
      .findUnique({ where: { id: 3 } })
      .AGENDAMENTO_HORARIO()

    return horarios;
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

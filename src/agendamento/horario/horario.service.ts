import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HorarioService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_HORARIO.findMany();
  }

  async findUnique(id: number) {
    return this.prismaService.aGENDAMENTO_HORARIO.findUnique({
      where: { id: +id },
    });
  }

  async create(
    @Body()
    {
      horario,
      status,
      dt_status,
      id_agendamento_situacao,
      id_agendamento_agenda,
    },
  ) {
    return this.prismaService.aGENDAMENTO_HORARIO.create({
      data: {
        horario,
        status,
        dt_status,
        id_agendamento_situacao,
        id_agendamento_agenda,
      },
    });
  }
}

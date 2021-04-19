import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConvidadoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_CONVIDADO.findMany();
  }

  async findUnique(id: number) {
    return this.prismaService.aGENDAMENTO_CONVIDADO.findUnique({
      where: { id: +id },
    });
  }

  async create(
    @Body()
    { nome, status, dt_status, id_agendamento_historico },
  ) {
    return this.prismaService.aGENDAMENTO_CONVIDADO.create({
      data: {
        nome,
        status,
        dt_status,
        id_agendamento_historico,
      },
    });
  }
}

import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipeService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_EQUIPE.findMany();
  }

  async findUnique(id: number) {
    return this.prismaService.aGENDAMENTO_EQUIPE.findUnique({
      where: { id: +id },
    });
  }

  async create(
    @Body()
    { limite_qtde, descricao, status, dt_status, id_agendamento_situacao },
  ) {
    return this.prismaService.aGENDAMENTO_EQUIPE.create({
      data: {
        limite_qtde,
        descricao,
        status,
        dt_status,
        id_agendamento_situacao,
      },
    });
  }
}

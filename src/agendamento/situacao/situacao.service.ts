import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SituacaoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.aGENDAMENTO_SITUACAO.findMany();
  }

  async findUnique(id: number) {
    return this.prismaService.aGENDAMENTO_SITUACAO.findUnique({
      where: { id: +id },
    });
  }

  async create(
    @Body()
    { descricao, status, dt_status },
  ) {
    return this.prismaService.aGENDAMENTO_SITUACAO.create({
      data: {
        descricao,
        status,
        dt_status,
      },
    });
  }
}

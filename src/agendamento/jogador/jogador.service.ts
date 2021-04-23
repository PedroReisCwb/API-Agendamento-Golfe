/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JogadorService {
    constructor(private readonly prismaService: PrismaService) {}
    
    async findAll() {
        return this.prismaService.aGENDAMENTO_JOGADOR.findMany();
      }
    
      async findUnique(id: number) {
        return this.prismaService.aGENDAMENTO_JOGADOR.findUnique({
          where: { id: +id },
        });
      }
    
      async create(
        @Body()
        {
          geracao,
          categoria,
          matricula,
          num_dep,
          status,
          dt_status,
          id_agendamento_situacao,
          nome,
        },
      ) {
        return this.prismaService.aGENDAMENTO_JOGADOR.create({
          data: {
            geracao,
            categoria,
            matricula,
            num_dep,
            status,
            dt_status,
            id_agendamento_situacao,
            nome,
          },
        });
      }
}

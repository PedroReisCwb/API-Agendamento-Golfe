import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JogadorController } from './jogador.controller';
import { JogadorService } from './jogador.service';

@Module({
  imports: [PrismaModule],
  controllers: [JogadorController],
  providers: [JogadorService],
})
export class JogadorModule {}

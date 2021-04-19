import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConvidadoController } from './convidado.controller';
import { ConvidadoService } from './convidado.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConvidadoController],
  providers: [ConvidadoService],
})
export class ConvidadoModule {}

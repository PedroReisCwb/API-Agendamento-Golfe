import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SituacaoController } from './situacao.controller';
import { SituacaoService } from './situacao.service';

@Module({
  imports: [PrismaModule],
  controllers: [SituacaoController],
  providers: [SituacaoService],
})
export class SituacaoModule {}

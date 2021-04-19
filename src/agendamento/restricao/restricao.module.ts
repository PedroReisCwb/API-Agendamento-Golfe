import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RestricaoController } from './restricao.controller';
import { RestricaoService } from './restricao.service';

@Module({
  imports: [PrismaModule],
  controllers: [RestricaoController],
  providers: [RestricaoService],
})
export class RestricaoModule {}

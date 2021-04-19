import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfiguracaoController } from './configuracao.controller';
import { ConfiguracaoService } from './configuracao.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConfiguracaoController],
  providers: [ConfiguracaoService],
})
export class ConfiguracaoModule {}

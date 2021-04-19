import { Module } from '@nestjs/common';
import { AgendaModule } from './agendamento/agenda/agenda.module';
import { BuracoModule } from './agendamento/buraco/buraco.module';
import { ConfiguracaoModule } from './agendamento/configuracao/configuracao.module';
import { ConvidadoModule } from './agendamento/convidado/convidado.module';
import { EquipeModule } from './agendamento/equipe/equipe.module';
import { HistoricoModule } from './agendamento/historico/historico.module';
import { HorarioModule } from './agendamento/horario/horario.module';
import { JogadorModule } from './agendamento/jogador/jogador.module';
import { RestricaoModule } from './agendamento/restricao/restricao.module';
import { SituacaoModule } from './agendamento/situacao/situacao.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AgendaModule,
    BuracoModule,
    ConfiguracaoModule,
    ConvidadoModule,
    EquipeModule,
    HistoricoModule,
    HorarioModule,
    JogadorModule,
    RestricaoModule,
    SituacaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

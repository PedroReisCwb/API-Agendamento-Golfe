-- AlterTable
ALTER TABLE [dbo].[AGENDAMENTO_AGENDA_PERIODO] DROP CONSTRAINT [DF__AGENDAMENTO_AGENDA_PERIODO__data_fim],
[DF__AGENDAMENTO_AGENDA_PERIODO__data_hora_liberacao],
[DF__AGENDAMENTO_AGENDA_PERIODO__data_inicio];

-- AlterTable
ALTER TABLE [dbo].[AGENDAMENTO_HISTORICO] DROP CONSTRAINT [DF__AGENDAMENTO_HISTORICO__data_acesso],
[DF__AGENDAMENTO_HISTORICO__data_registro],
[DF__AGENDAMENTO_HISTORICO__data_reserva];

-- AlterTable
ALTER TABLE [dbo].[AGENDAMENTO_RESTRICAO] DROP CONSTRAINT [DF__AGENDAMENTO_RESTRICAO__data_fim],
[DF__AGENDAMENTO_RESTRICAO__data_inicio];

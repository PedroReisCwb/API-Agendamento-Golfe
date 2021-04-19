-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_AGENDA_PERIODO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] VARCHAR(100) NOT NULL,
    [data_inicio] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_AGENDA_PERIODO__data_inicio] DEFAULT CURRENT_TIMESTAMP,
    [data_fim] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_AGENDA_PERIODO__data_fim] DEFAULT CURRENT_TIMESTAMP,
    [data_hora_liberacao] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_AGENDA_PERIODO__data_hora_liberacao] DEFAULT CURRENT_TIMESTAMP,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_AGENDA_PERIODO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_situacao] INT,
    CONSTRAINT [PK__AGENDAMENTO_AGENDA_PERIODO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_BURACO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero_buraco] TINYINT NOT NULL,
    [descricao] VARCHAR(100) NOT NULL,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_BURACO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_situacao] INT,
    CONSTRAINT [PK__AGENDAMENTO_BURACO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_CONFIGURACAO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_CONFIGURACAO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_agenda] INT,
    [id_agendamento_buraco] INT,
    [id_agendamento_equipe] INT,
    [id_agendamento_horario] INT,
    CONSTRAINT [PK__AGENDAMENTO_CONFIGURACAO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_CONVIDADO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nome] VARCHAR(100) NOT NULL,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_CONVIDADO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_historico] INT,
    CONSTRAINT [PK__AGENDAMENTO_CONVIDADO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_EQUIPE] (
    [id] INT NOT NULL IDENTITY(1,1),
    [limite_qtde] TINYINT NOT NULL,
    [descricao] VARCHAR(100) NOT NULL,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_EQUIPE__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_situacao] INT,
    CONSTRAINT [PK__AGENDAMENTO_EQUIPE__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_HISTORICO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [data_reserva] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_HISTORICO__data_reserva] DEFAULT CURRENT_TIMESTAMP,
    [data_registro] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_HISTORICO__data_registro] DEFAULT CURRENT_TIMESTAMP,
    [data_acesso] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_HISTORICO__data_acesso] DEFAULT CURRENT_TIMESTAMP,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_HISTORICO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_historico] INT NOT NULL,
    [id_agendamento_jogador] INT,
    [id_agendamento_agenda] INT,
    [id_agendamento_buraco] INT,
    [id_agendamento_equipe] INT,
    [id_agendamento_horario] INT,
    CONSTRAINT [PK__AGENDAMENTO_HISTORICO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_HORARIO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [horario] VARCHAR(100) NOT NULL,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_HORARIO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_situacao] INT,
    [id_agendamento_agenda] INT,
    CONSTRAINT [PK__AGENDAMENTO_HORARIO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_JOGADOR] (
    [id] INT NOT NULL IDENTITY(1,1),
    [geracao] TINYINT NOT NULL,
    [categoria] VARCHAR(1) NOT NULL,
    [matricula] VARCHAR(255) NOT NULL,
    [num_dep] TINYINT NOT NULL,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_JOGADOR__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_situacao] INT,
    CONSTRAINT [PK__AGENDAMENTO_JOGADOR__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_RESTRICAO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [data_inicio] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_RESTRICAO__data_inicio] DEFAULT CURRENT_TIMESTAMP,
    [data_fim] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_RESTRICAO__data_fim] DEFAULT CURRENT_TIMESTAMP,
    [msg_resumida] VARCHAR(50) NOT NULL,
    [msg_detalhada] VARCHAR(300) NOT NULL,
    [bloquear] VARCHAR(1) NOT NULL,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_RESTRICAO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    [id_agendamento_situacao] INT,
    [id_agendamento_agenda] INT,
    CONSTRAINT [PK__AGENDAMENTO_RESTRICAO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_SITUACAO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descricao] VARCHAR(100) NOT NULL,
    [status] VARCHAR(1) NOT NULL,
    [dt_status] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_SITUACAO__dt_status] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__AGENDAMENTO_SITUACAO__id] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AGENDAMENTO_USUARIO] (
    [id] INT NOT NULL IDENTITY(1,1),
    [created] DATETIME NOT NULL CONSTRAINT [DF__AGENDAMENTO_USUARIO__created] DEFAULT CURRENT_TIMESTAMP,
    [nome] VARCHAR(100) NOT NULL,
    [senha] VARCHAR(255) NOT NULL,
    CONSTRAINT [PK__AGENDAMENTO_USUARIO__id] PRIMARY KEY ([id]),
    CONSTRAINT [AGENDAMENTO_USUARIO_nome_unique] UNIQUE ([nome])
);

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_AGENDA_PERIODO] ADD CONSTRAINT [FK__AGENDAMENTO_AGENDA_PERIODO__id_agendamento_situacao] FOREIGN KEY ([id_agendamento_situacao]) REFERENCES [dbo].[AGENDAMENTO_SITUACAO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_BURACO] ADD CONSTRAINT [FK__AGENDAMENTO_BURACO__id_agendamento_situacao] FOREIGN KEY ([id_agendamento_situacao]) REFERENCES [dbo].[AGENDAMENTO_SITUACAO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_CONFIGURACAO] ADD CONSTRAINT [FK__AGENDAMENTO_CONFIGURACAO__id_agendamento_agenda] FOREIGN KEY ([id_agendamento_agenda]) REFERENCES [dbo].[AGENDAMENTO_AGENDA_PERIODO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_CONFIGURACAO] ADD CONSTRAINT [FK__AGENDAMENTO_CONFIGURACAO__id_agendamento_buraco] FOREIGN KEY ([id_agendamento_buraco]) REFERENCES [dbo].[AGENDAMENTO_BURACO]([id]) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_CONFIGURACAO] ADD CONSTRAINT [FK__AGENDAMENTO_CONFIGURACAO__id_agendamento_equipe] FOREIGN KEY ([id_agendamento_equipe]) REFERENCES [dbo].[AGENDAMENTO_EQUIPE]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_CONFIGURACAO] ADD CONSTRAINT [FK__AGENDAMENTO_CONFIGURACAO__id_agendamento_horario] FOREIGN KEY ([id_agendamento_horario]) REFERENCES [dbo].[AGENDAMENTO_HORARIO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_CONVIDADO] ADD CONSTRAINT [FK__AGENDAMENTO_CONVIDADO__id_agendamento_historico] FOREIGN KEY ([id_agendamento_historico]) REFERENCES [dbo].[AGENDAMENTO_HISTORICO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_EQUIPE] ADD CONSTRAINT [FK__AGENDAMENTO_EQUIPE__id_agendamento_situacao] FOREIGN KEY ([id_agendamento_situacao]) REFERENCES [dbo].[AGENDAMENTO_SITUACAO]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_HISTORICO] ADD CONSTRAINT [FK__AGENDAMENTO_HISTORICO__id_agendamento_agenda] FOREIGN KEY ([id_agendamento_agenda]) REFERENCES [dbo].[AGENDAMENTO_AGENDA_PERIODO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_HISTORICO] ADD CONSTRAINT [FK__AGENDAMENTO_HISTORICO__id_agendamento_buraco] FOREIGN KEY ([id_agendamento_buraco]) REFERENCES [dbo].[AGENDAMENTO_BURACO]([id]) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_HISTORICO] ADD CONSTRAINT [FK__AGENDAMENTO_HISTORICO__id_agendamento_equipe] FOREIGN KEY ([id_agendamento_equipe]) REFERENCES [dbo].[AGENDAMENTO_EQUIPE]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_HISTORICO] ADD CONSTRAINT [FK__AGENDAMENTO_HISTORICO__id_agendamento_horario] FOREIGN KEY ([id_agendamento_horario]) REFERENCES [dbo].[AGENDAMENTO_HORARIO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_HISTORICO] ADD CONSTRAINT [FK__AGENDAMENTO_HISTORICO__id_agendamento_jogador] FOREIGN KEY ([id_agendamento_jogador]) REFERENCES [dbo].[AGENDAMENTO_JOGADOR]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_HORARIO] ADD CONSTRAINT [FK__AGENDAMENTO_HORARIO__id_agendamento_agenda] FOREIGN KEY ([id_agendamento_agenda]) REFERENCES [dbo].[AGENDAMENTO_AGENDA_PERIODO]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_HORARIO] ADD CONSTRAINT [FK__AGENDAMENTO_HORARIO__id_agendamento_situacao] FOREIGN KEY ([id_agendamento_situacao]) REFERENCES [dbo].[AGENDAMENTO_SITUACAO]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_JOGADOR] ADD CONSTRAINT [FK__AGENDAMENTO_JOGADOR__id_agendamento_situacao] FOREIGN KEY ([id_agendamento_situacao]) REFERENCES [dbo].[AGENDAMENTO_SITUACAO]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_RESTRICAO] ADD CONSTRAINT [FK__AGENDAMENTO_RESTRICAO__id_agendamento_agenda] FOREIGN KEY ([id_agendamento_agenda]) REFERENCES [dbo].[AGENDAMENTO_AGENDA_PERIODO]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AGENDAMENTO_RESTRICAO] ADD CONSTRAINT [FK__AGENDAMENTO_RESTRICAO__id_agendamento_situacao] FOREIGN KEY ([id_agendamento_situacao]) REFERENCES [dbo].[AGENDAMENTO_SITUACAO]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

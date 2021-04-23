/*
  Warnings:

  - You are about to alter the column `matricula` on the `AGENDAMENTO_JOGADOR` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(4)`.
  - Added the required column `nome` to the `AGENDAMENTO_JOGADOR` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE [dbo].[AGENDAMENTO_JOGADOR] ALTER COLUMN [matricula] VARCHAR(4) NOT NULL;
ALTER TABLE [dbo].[AGENDAMENTO_JOGADOR] ADD [nome] VARCHAR(255) NOT NULL;

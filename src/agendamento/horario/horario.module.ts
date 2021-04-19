import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HorarioController } from './horario.controller';
import { HorarioService } from './horario.service';

@Module({
  imports: [PrismaModule],
  controllers: [HorarioController],
  providers: [HorarioService],
})
export class HorarioModule {}

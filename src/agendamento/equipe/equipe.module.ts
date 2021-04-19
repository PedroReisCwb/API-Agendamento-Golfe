import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EquipeController } from './equipe.controller';
import { EquipeService } from './equipe.service';

@Module({
  imports: [PrismaModule],
  controllers: [EquipeController],
  providers: [EquipeService],
})
export class EquipeModule {}

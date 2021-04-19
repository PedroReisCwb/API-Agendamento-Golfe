import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BuracoController } from './buraco.controller';
import { BuracoService } from './buraco.service';

@Module({
  imports: [PrismaModule],
  controllers: [BuracoController],
  providers: [BuracoService],
})
export class BuracoModule {}

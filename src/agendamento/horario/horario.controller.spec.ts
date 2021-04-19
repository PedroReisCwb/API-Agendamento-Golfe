import { Test, TestingModule } from '@nestjs/testing';
import { HorarioController } from './horario.controller';

describe('HorarioController', () => {
  let controller: HorarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorarioController],
    }).compile();

    controller = module.get<HorarioController>(HorarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

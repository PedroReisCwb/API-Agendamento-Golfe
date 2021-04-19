import { Test, TestingModule } from '@nestjs/testing';
import { ConvidadoController } from './convidado.controller';

describe('ConvidadoController', () => {
  let controller: ConvidadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvidadoController],
    }).compile();

    controller = module.get<ConvidadoController>(ConvidadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

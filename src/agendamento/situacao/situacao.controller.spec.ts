import { Test, TestingModule } from '@nestjs/testing';
import { SituacaoController } from './situacao.controller';

describe('SituacaoController', () => {
  let controller: SituacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SituacaoController],
    }).compile();

    controller = module.get<SituacaoController>(SituacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

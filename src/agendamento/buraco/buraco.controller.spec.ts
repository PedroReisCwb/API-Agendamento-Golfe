import { Test, TestingModule } from '@nestjs/testing';
import { BuracoController } from './buraco.controller';

describe('BuracoController', () => {
  let controller: BuracoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuracoController],
    }).compile();

    controller = module.get<BuracoController>(BuracoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BuracoService } from './buraco.service';

describe('BuracoService', () => {
  let service: BuracoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuracoService],
    }).compile();

    service = module.get<BuracoService>(BuracoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

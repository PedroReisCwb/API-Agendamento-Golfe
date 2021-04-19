import { Test, TestingModule } from '@nestjs/testing';
import { ConvidadoService } from './convidado.service';

describe('ConvidadoService', () => {
  let service: ConvidadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvidadoService],
    }).compile();

    service = module.get<ConvidadoService>(ConvidadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

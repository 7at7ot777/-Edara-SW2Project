import { Test, TestingModule } from '@nestjs/testing';
import { TedExService } from './ted-ex.service';

describe('TedExService', () => {
  let service: TedExService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TedExService],
    }).compile();

    service = module.get<TedExService>(TedExService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SalkaService } from './salka.service';

describe('SalkaService', () => {
  let service: SalkaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalkaService],
    }).compile();

    service = module.get<SalkaService>(SalkaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

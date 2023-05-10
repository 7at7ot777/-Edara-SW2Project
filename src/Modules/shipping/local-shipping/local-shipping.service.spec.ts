import { Test, TestingModule } from '@nestjs/testing';
import { LocalShippingService } from './local-shipping.service';

describe('LocalShippingService', () => {
  let service: LocalShippingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalShippingService],
    }).compile();

    service = module.get<LocalShippingService>(LocalShippingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

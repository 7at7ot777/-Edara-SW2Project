import { Test, TestingModule } from '@nestjs/testing';
import { GlobalShippingService } from './global-shipping.service';

describe('GlobalShippingService', () => {
  let service: GlobalShippingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalShippingService],
    }).compile();

    service = module.get<GlobalShippingService>(GlobalShippingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

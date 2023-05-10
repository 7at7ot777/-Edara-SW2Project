import { Test, TestingModule } from '@nestjs/testing';
import { LocalShippingController } from './local-shipping.controller';
import { LocalShippingService } from './local-shipping.service';

describe('LocalShippingController', () => {
  let controller: LocalShippingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalShippingController],
      providers: [LocalShippingService],
    }).compile();

    controller = module.get<LocalShippingController>(LocalShippingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

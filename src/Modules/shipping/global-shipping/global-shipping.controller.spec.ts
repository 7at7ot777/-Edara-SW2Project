import { Test, TestingModule } from '@nestjs/testing';
import { GlobalShippingController } from './global-shipping.controller';
import { GlobalShippingService } from './global-shipping.service';

describe('GlobalShippingController', () => {
  let controller: GlobalShippingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalShippingController],
      providers: [GlobalShippingService],
    }).compile();

    controller = module.get<GlobalShippingController>(GlobalShippingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

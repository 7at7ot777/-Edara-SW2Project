import { Test, TestingModule } from '@nestjs/testing';
import { LocalShipment } from './ted-ex.controller';

describe('LocalShipment', () => {
  let controller: LocalShipment;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalShipment],
    }).compile();

    controller = module.get<LocalShipment>(LocalShipment);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

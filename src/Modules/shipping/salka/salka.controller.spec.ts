import { Test, TestingModule } from '@nestjs/testing';
import { InternationalShipment } from './salka.controller';

describe('InternationalShipment', () => {
  let controller: InternationalShipment;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternationalShipment],
    }).compile();

    controller = module.get<InternationalShipment>(InternationalShipment);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

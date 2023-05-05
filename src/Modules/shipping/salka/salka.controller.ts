import { Controller } from '@nestjs/common';
import { DeleveryService } from '../../../Interface/delevery-service.interface';
import { Product } from '../../../../entities/Product';

@Controller('salka')
export class InternationalShipment implements DeleveryService {
  CompanyName = 'Salka';
  deleverProduct(product: Product): void {
    console.log(
      'The product ' +
        product.name +
        'is now delevering to ' +
        product.warehouse.name +
        'By' +
        this.CompanyName +
        'Locally',
    );
  }
}

import { Product } from '../../entities/Product';

export interface DeleveryService {
  deleverProduct(product: Product): void;
}

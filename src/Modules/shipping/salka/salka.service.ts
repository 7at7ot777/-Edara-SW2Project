import { Injectable } from '@nestjs/common';
import { ShippingCompany } from "../ShippingCompany";

@Injectable()
export class SalkaService implements ShippingCompany {
  shipItem(): void {
  }

  CompanyName: string;

}

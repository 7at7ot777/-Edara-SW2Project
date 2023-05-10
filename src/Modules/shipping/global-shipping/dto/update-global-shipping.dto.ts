import { PartialType } from '@nestjs/mapped-types';
import { CreateGlobalShippingDto } from './create-global-shipping.dto';

export class UpdateGlobalShippingDto extends PartialType(CreateGlobalShippingDto) {}

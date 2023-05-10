import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalShippingDto } from './create-local-shipping.dto';

export class UpdateLocalShippingDto extends PartialType(CreateLocalShippingDto) {}

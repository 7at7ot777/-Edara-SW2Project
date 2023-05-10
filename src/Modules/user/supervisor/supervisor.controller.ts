import { Controller, Get } from "@nestjs/common";

@Controller('supervisor')
export class SupervisorController {
  @Get('getAllProduct/:id')
  getAllProduct(){}

}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post, Put,
  ValidationPipe
} from "@nestjs/common";
import { RequestService } from './request.service';
import { CreateRequestDto } from './requestDTOs/create-request.dto';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  /*@Post('createRequest')
  createRequest(@Body(ValidationPipe) createRequestDto: CreateRequestDto) {
    this.requestService.createRequest();
  }
  @Get('getRequest/:id')
  getRequest() {
    this.requestService.getRequest();
  }
  @Get('getAllRequests')
  getAllRequests() {
    this.requestService.getAllRequests();
  }
  @Delete('deleteRequest/:id')
  deleteRequest(@Param('id', ParseIntPipe) id: number) {
    this.requestService.deleteRequest();
  }
  @Get('acceptRequest/:id')
  acceptRequest(@Param('id', ParseIntPipe) id: number) {
    this.requestService.acceptRequest();
  }
  @Get('rejectRequest/:id')
  rejectRequest(@Param('id', ParseIntPipe) id: number) {
    this.requestService.rejectRequest();
  }
  @Put('editRequest/:id')
editRequest(){
  this.requestService.editRequest();
}*/
}

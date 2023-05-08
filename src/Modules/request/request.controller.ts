import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './requestDTOs/create-request.dto';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Post('createRequest')
  createRequest(@Body(ValidationPipe) createRequestDto: CreateRequestDto) {}
  @Get('getRequest/:id')
  getRequest() {}
  @Get('getAllRequests')
  getAllRequests() {}
  @Delete('deleteRequest/:id')
  deleteRequest(@Param('id', ParseIntPipe) id: number) {}
  @Get('acceptRequest/:id')
  acceptRequest(@Param('id', ParseIntPipe) id: number) {}
  @Get('rejectRequest/:id')
  rejectRequest(@Param('id', ParseIntPipe) id: number) {}
}

import {
  Headers,
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
  Res,
  Delete,
  ParseIntPipe,
  Param,
  Put,
} from '@nestjs/common';
import { Response } from 'express';
import { RequestService } from './request.service';
import { CreateRequestDto } from './requestDTOs/create-request.dto';
import { UpdateRequestDto } from './requestDTOs/update-request.dto';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}
  @Post('createRequest')
  createRequest(@Body(ValidationPipe) createRequestDto: CreateRequestDto) {
    this.requestService.createRequest(createRequestDto);
  }
  @Get('getAllRequests')
  getAllRequests(@Headers('token') token: string, @Res() res: Response) {
    this.requestService.getAllRequests(token, res);
  }
  @Delete('deleteRequest/:id')
  deleteRequest(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.deleteRequest(id);
  }

  @Get('acceptRequest/:id')
  acceptRequest(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.acceptRequest(id);
  }

  @Get('rejectRequest/:id')
  rejectRequest(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.rejectRequest(id);
  }

  @Put('editRequest/:id')
  editRequest(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateRequestDto: UpdateRequestDto,
  ) {
    return this.requestService.editRequest(id, updateRequestDto);
  }
}

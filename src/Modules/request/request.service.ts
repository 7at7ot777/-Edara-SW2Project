import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '../../../entities/Request';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}
  async getRequest(id: number) {
    const request =
  }
  async getAllRequests() {}
  async deleteRequest() {}
  async acceptRequest() {}
  async rejectRequest() {}
  async createRequest() {}
  async editRequest() {}
}

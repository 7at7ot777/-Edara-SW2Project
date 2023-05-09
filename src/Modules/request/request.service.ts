import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '../../../entities/Request';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { User } from '../../../entities/User';
import { Warehouse } from '../../../entities/Warehouse';
import { CreateRequestDto } from './requestDTOs/create-request.dto';
import { Product } from '../../../entities/Product';
import { ShippingCompany } from '../../../entities/ShippingCompany';
import { UpdateRequestDto } from './requestDTOs/update-request.dto';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ShippingCompany)
    private readonly shipRepository: Repository<ShippingCompany>,
  ) {}

  async editRequest(id: number, updateRequest: UpdateRequestDto) {
    const request = await this.requestRepository.findOne({
      where: { id },
      relations: {
        product: true,
        shippingCompany: true,
        user: true,
      },
    });
    await this.UpdateData(request, updateRequest);
    await this.requestRepository.save(request);
    return { message: 'Data Updated Successfully', code: 400 };
  }
  async UpdateData(request: Request, updateData: UpdateRequestDto) {
    const product = await this.productRepository.findOneBy({
      id: updateData.productId,
    });
    const user = await this.userRepository.findOneBy({
      id: updateData.userId,
    });
    const shippingCompany = await this.shipRepository.findOneBy({
      id: updateData.shippingCompanyId,
    });
    if (updateData.quantity != null) {
      request.quantity = updateData.quantity;
    }
    if (updateData.isIncrease != null) {
      request.isIncrease = updateData.isIncrease;
    }
    console.log(product);
    console.log(user);
    console.log(shippingCompany);
    console.log(request);

    if (product) {
      request.product = product;
    }
    if (user) {
      request.user = user;
    }
    if (shippingCompany instanceof ShippingCompany) {
      request.shippingCompany = shippingCompany;
    }
    return;
  }

  async deleteRequest(id: number) {
    const request = await this.requestRepository.findOneBy({ id });
    if (request) {
      await this.requestRepository.remove(request);
      return { message: 'Request is deleted successfully' };
    } else {
      return { error: ['Request not found'] };
    }
  }
  async createRequest(createRequestDto: CreateRequestDto) {
    const product = await this.productRepository.findOneBy({
      id: createRequestDto.productId,
    });
    const user = await this.userRepository.findOneBy({
      id: createRequestDto.userId,
    });
    const shippingCompany = await this.shipRepository.findOneBy({
      id: createRequestDto.shippingCompanyId,
    });
    const obj = { ...createRequestDto, product, user, shippingCompany };
    const request = await this.requestRepository.create(obj);
    //console.log(request);
    await this.requestRepository.save(request);
  }

  /////// START GET ALL REQUESTS \\\\\\\\
  async getAllRequests(token, res) {
    const userService = new UserService(
      this.userRepository,
      this.warehouseRepository,
    );
    const user = await userService.findUserByToken(token);
    if (user.isAdmin == true) {
      await this.getAllRequestsForAdmin(res);
    } else {
      await this.getRequestsForUser(user, res);
    }
  }
  async getRequestsForUser(user, res) {
    const requests = await this.requestRepository.find({
      relations: {
        product: true,
        user: true,
        shippingCompany: true,
      },
      where: { user: user },
    });
    if (requests[0] instanceof Request) {
      res.json({ requests: requests });
    } else {
      res.json({ error: ['There are no requests'] });
    }
  }
  async getAllRequestsForAdmin(res) {
    const requests = await this.requestRepository.find({
      relations: {
        product: true,
        shippingCompany: true,
        user: true,
      },
    });
    if (requests[0] instanceof Request) {
      res.json({ requests: requests });
    } else {
      res.json({ error: ['There are no requests'] });
    }
  }
  /////// END GET ALL REQUESTS \\\\\\\\

  async acceptRequest(id) {
    const request = await this.requestRepository.findOneBy({ id });
    if (request) {
      await this.processAceeptRequest(request);
      return { message: 'Request is accepted successfully' };
    } else {
      return { error: ['Request not found'] };
    }
  }
  async processAceeptRequest(request: Request) {
    var product = await this.productRepository.findOneBy(request.product);
    if (request.isIncrease) {
      product.stock += request.quantity;
    } else {
      product.stock -= request.quantity;
    }
    request.isActive = false;
    request.isAccepted = true;
    await this.productRepository.save(product);
    await this.requestRepository.save(request);
  }
  async rejectRequest(id) {
    const request = await this.requestRepository.findOneBy({ id });
    if (request) {
      await this.processRejectRequest(request);
      return { message: 'Request is rejected' };
    } else {
      return { error: ['Request not found'] };
    }
  }
  async processRejectRequest(request: Request) {
    request.isActive = false;
    request.isAccepted = false;
    await this.requestRepository.save(request);
  }
}

import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../entities/User';
import { Repository } from 'typeorm';
export class IsAdminMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('inside middleware');
    const token: any = req.headers.token;
    const user = await this.usersRepository.findOneBy({ token: token });
    if (!user) {
      throw new HttpException('User Not found', HttpStatus.NOT_FOUND);
    }
    if (user.isAdmin == true) {
      next();
    } else {
      res.json({ message: 'Not Authorized', code: HttpStatus.FORBIDDEN });
    }
  }
}

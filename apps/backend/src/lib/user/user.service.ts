// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  public getUser(): Promise<User[]> {
    return prisma.user.findMany();
  }
}

// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Usergrp } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsergrpService {
  public getUsergrp(): Promise<Usergrp[]> {
    return prisma.usergrp.findMany();
  }
}

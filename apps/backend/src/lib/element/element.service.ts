// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Element } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ElementService {
  public getElement(): Promise<Element[]> {
    return prisma.element.findMany();
  }
}

// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CategoryService {
  public getCategory(): Promise<Category[]> {
    return prisma.category.findMany();
  }
}

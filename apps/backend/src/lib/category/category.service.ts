// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '../../app/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategory(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async getCategoryBy(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({ where: { id: Number(id) } });
  }

  async createCategory(data: Category): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  async updateCategory(id: number): Promise<Category> {
    return this.prisma.category.update({
      where: { id: Number(id) },
      data: {},
    });
  }

  async deleteCategory(id: number): Promise<Category> {
    return this.prisma.category.delete({
      where: { id: Number(id) },
    });
  }
}

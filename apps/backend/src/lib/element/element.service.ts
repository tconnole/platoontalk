// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { Element, Prisma } from '@prisma/client';
import { PrismaService } from '../../app/prisma.service';

@Injectable()
export class ElementService {
  constructor(private prisma: PrismaService) {}

  async getElement(): Promise<Element[]> {
    return this.prisma.element.findMany();
  }

  async getElementBy(id: number): Promise<Element | null> {
    return this.prisma.element.findUnique({ where: { id: Number(id) } });
  }

  async createElement(data: Element): Promise<Element> {
    return this.prisma.element.create({
      data,
    });
  }

  async updateElement(id: number): Promise<Element> {
    return this.prisma.element.update({
      where: { id: Number(id) },
      data: {},
    });
  }

  async deleteElement(id: number): Promise<Element> {
    return this.prisma.element.delete({
      where: { id: Number(id) },
    });
  }
}

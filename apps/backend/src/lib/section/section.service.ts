// libs/products/src/lib/section.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Section } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SectionService {
  public getSection(): Promise<Section[]> {
    return prisma.section.findMany();
  }
}

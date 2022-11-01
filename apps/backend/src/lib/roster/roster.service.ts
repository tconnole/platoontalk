// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Roster } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RosterService {
  public getRoster(): Promise<Roster[]> {
    return prisma.roster.findMany();
  }
}

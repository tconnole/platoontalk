// libs/products/src/lib/event.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Event } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EventService {
  public getEvent(): Promise<Event[]> {
    return prisma.event.findMany();
  }
}

// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from '../../app/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getEvent(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async getEventBy(id: number): Promise<Event | null> {
    return this.prisma.event.findUnique({ where: { id: Number(id) } });
  }

  async createEvent(data: Event): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  async updateEvent(id: number): Promise<Event> {
    return this.prisma.event.update({
      where: { id: Number(id) },
      data: {},
    });
  }

  async deleteEvent(id: number): Promise<Event> {
    return this.prisma.event.delete({
      where: { id: Number(id) },
    });
  }
}

// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PrismaService } from '../../app/prisma.service';

@Module({
  imports: [],
  controllers: [EventController],
  providers: [PrismaService, EventService],
})
export class EventModule {}

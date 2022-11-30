// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { ElementService } from './element.service';
import { ElementController } from './element.controller';
import { PrismaService } from '../../app/prisma.service';

@Module({
  imports: [],
  controllers: [ElementController],
  providers: [PrismaService, ElementService],
})
export class ElementModule {}

// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { PrismaService } from '../../app/prisma.service';

@Module({
  imports: [],
  controllers: [SectionController],
  providers: [PrismaService, SectionService],
})
export class SectionModule {}

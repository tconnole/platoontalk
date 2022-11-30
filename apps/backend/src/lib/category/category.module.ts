// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from '../../app/prisma.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [PrismaService, CategoryService],
})
export class CategoryModule {}

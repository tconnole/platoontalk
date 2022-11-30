// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from '../../app/prisma.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PrismaService, PostsService],
})
export class PostsModule {}

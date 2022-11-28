// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { FileService } from './file.service';
import { FileController } from './file.controller';
import { PrismaService } from '../../app/prisma.service';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [PrismaService, FileService],
})
export class FileModule {}

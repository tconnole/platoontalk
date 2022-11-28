// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { UsergrpService } from './usergrp.service';
import { UsergrpController } from './usergrp.controller';
import { PrismaService } from '../../app/prisma.service';

@Module({
  imports: [],
  controllers: [UsergrpController],
  providers: [PrismaService, UsergrpService],
})
export class UsergrpModule {}

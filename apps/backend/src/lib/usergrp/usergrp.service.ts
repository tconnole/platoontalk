// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { Usergrp, Prisma } from '@prisma/client';
import { PrismaService } from '../../app/prisma.service';

@Injectable()
export class UsergrpService {
  constructor(private prisma: PrismaService) {}

  async getUsergrp(): Promise<Usergrp[]> {
    return this.prisma.usergrp.findMany();
  }

  async getUsergrpBy(id: number): Promise<Usergrp | null> {
    return this.prisma.usergrp.findUnique({ where: { id: Number(id) } });
  }

  async createUsergrp(data: Usergrp): Promise<Usergrp> {
    return this.prisma.usergrp.create({
      data,
    });
  }

  async updateUsergrp(id: number): Promise<Usergrp> {
    return this.prisma.usergrp.update({
      where: { id: Number(id) },
      data: {},
    });
  }

  async deleteUsergrp(id: number): Promise<Usergrp> {
    return this.prisma.usergrp.delete({
      where: { id: Number(id) },
    });
  }
}

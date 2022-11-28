// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common';
import { File, Prisma } from '@prisma/client';
import { PrismaService } from '../../app/prisma.service';

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}

  async getFile(): Promise<File[]> {
    return this.prisma.file.findMany();
  }

  async getFileBy(id: number): Promise<File | null> {
    return this.prisma.file.findUnique({ where: { id: Number(id) } });
  }

  async createFile(data: File): Promise<File> {
    return this.prisma.file.create({
      data,
    });
  }

  async updateFile(id: number): Promise<File> {
    return this.prisma.file.update({
      where: { id: Number(id) },
      data: {},
    });
  }

  async deleteFile(id: number): Promise<File> {
    return this.prisma.file.delete({
      where: { id: Number(id) },
    });
  }
}

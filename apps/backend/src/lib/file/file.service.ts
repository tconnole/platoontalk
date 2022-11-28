// libs/products/src/lib/file.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, File } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FileService {
  public getFile(): Promise<File[]> {
    return prisma.file.findMany();
  }
}

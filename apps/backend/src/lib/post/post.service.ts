// libs/products/src/lib/post.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Post } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PostService {
  public getPost(): Promise<Post[]> {
    return prisma.post.findMany();
  }
}

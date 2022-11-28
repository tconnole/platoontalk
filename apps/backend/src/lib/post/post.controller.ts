// libs/products/src/lib/products.controller.ts

import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  public getPost() {
    return this.postService.getPost();
  }
}

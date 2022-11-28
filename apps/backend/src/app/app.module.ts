// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from '../lib/products/product.controller';
import { ProductService } from '../lib/products/product.service';
import { CategoryController } from '../lib/category/category.controller';
import { CategoryService } from '../lib/category/category.service';
import { UserService } from '../lib/user/user.service';
import { UserController } from '../lib/user/user.controller';
import { ElementController } from '../lib/element/element.controller';
import { ElementService } from '../lib/element/element.service';
import { PostController } from '../lib/post/post.controller';
import { PostService } from '../lib/post/post.service';
import { UsergrpController } from '../lib/usergrp/usergrp.controller';
import { UsergrpService } from '../lib/usergrp/usergrp.service';
import { FileController } from '../lib/file/file.controller';
import { FileService } from '../lib/file/file.service';
import { SectionController } from '../lib/section/section.controller';
import { SectionService } from '../lib/section/section.service';
import { EventController } from '../lib/event/event.controller';
import { EventService } from '../lib/event/event.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductController,
    CategoryController,
    UserController,
    ElementController,
    PostController,
    UsergrpController,
    FileController,
    SectionController,
    EventController,
  ],
  providers: [
    AppService,
    ProductService,
    CategoryService,
    UserService,
    ElementService,
    PostService,
    UsergrpService,
    FileService,
    SectionService,
    EventService,
  ],
})
export class AppModule {}

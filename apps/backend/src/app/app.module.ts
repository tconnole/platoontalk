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

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductController,
    CategoryController,
    UserController,
    ElementController,
  ],
  providers: [
    AppService,
    ProductService,
    CategoryService,
    UserService,
    ElementService,
  ],
})
export class AppModule {}

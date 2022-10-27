// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from '../lib/products/product.controller';
import { ProductService } from '../lib/products/product.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}

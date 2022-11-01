// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from '../lib/products/product.controller';
import { ProductService } from '../lib/products/product.service';
import { RosterController } from '../lib/roster/roster.controller';
import { RosterService } from '../lib/roster/roster.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController, RosterController],
  providers: [AppService, ProductService, RosterService],
})
export class AppModule {}

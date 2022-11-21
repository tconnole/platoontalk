// libs/products/src/lib/products.controller.ts

import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  public getCategory() {
    return this.categoryService.getCategory();
  }
}

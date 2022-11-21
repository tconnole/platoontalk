// libs/products/src/lib/products.controller.ts

import { Controller, Get } from '@nestjs/common';
import { ElementService } from './element.service';

@Controller('element')
export class ElementController {
  constructor(private elementService: ElementService) {}

  @Get()
  public getElement() {
    return this.elementService.getElement();
  }
}

// libs/products/src/lib/section.controller.ts

import { Controller, Get } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  public getSection() {
    return this.sectionService.getSection();
  }
}

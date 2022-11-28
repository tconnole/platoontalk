// libs/products/src/lib/products.controller.ts

import { Controller, Get } from '@nestjs/common';
import { UsergrpService } from './usergrp.service';

@Controller('usergrp')
export class UsergrpController {
  constructor(private usergrpService: UsergrpService) {}

  @Get()
  public getUsergrp() {
    return this.usergrpService.getUsergrp();
  }
}

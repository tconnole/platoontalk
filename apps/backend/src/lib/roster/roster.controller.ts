// libs/products/src/lib/products.controller.ts

import { Controller, Get } from '@nestjs/common';
import { RosterService } from './roster.service';

@Controller('roster')
export class RosterController {
  constructor(private rosterService: RosterService) {}

  @Get()
  public getRoster() {
    return this.rosterService.getRoster();
  }
}

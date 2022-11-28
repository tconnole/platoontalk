// libs/products/src/lib/event.controller.ts

import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  public getEvent() {
    return this.eventService.getEvent();
  }
}

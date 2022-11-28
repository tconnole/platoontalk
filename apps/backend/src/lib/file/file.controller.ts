// libs/products/src/lib/file.controller.ts

import { Controller, Get } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get()
  public getFile() {
    return this.fileService.getFile();
  }
}

import { Controller, Get } from '@nestjs/common';

import { Message } from '@wpoc/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('issues')
  getData(): any {
    return this.appService.getData()
  }


}

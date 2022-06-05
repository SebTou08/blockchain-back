import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Block } from './models/Block';
import { Blockchain } from './models/Blockchain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('blockchain')
  async getHello() {
    return this.appService.getWholeBlockchain();
  }

  @Post('newblock')
  async createBlock(@Req() data: string) {
    this.appService.createNewBlock(data);
  }
}

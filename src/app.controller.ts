import { Controller, Get, Post, Req } from '@nestjs/common';
/* eslint-disable */
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
  async createBlock(@Req() data: any) {
    console.log('%c⧭', 'color: #00e600', data);
    this.appService.createNewBlock(data.body);
  }
}

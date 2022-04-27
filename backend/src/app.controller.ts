import {
  Controller,
  Get,
  Post,
  Body
} from '@nestjs/common';
import { AppService } from './app.service';
import { IResponse } from './utils/utils.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  health(): string {
    return this.appService.checkHealth();
  }

  /********************** User ***********************/
  @Post('/user/authentication/signup')
  signup(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<IResponse> {
    return this.appService.signup(username,password);
  }

  @Post('/user/authentication/signin')
  signin(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<IResponse> {
    return this.appService.signin(username,password);
  }

  /***************************************************/
}

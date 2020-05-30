import { Controller, Request, UseGuards, Get } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller()
export class UserController {
  constructor() {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';

import { CoreService } from './core.service';

import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class CoreController {
  constructor(
    private readonly coreService: CoreService,
    private authService: AuthService
  ) {}

  @Get()
  getHome(): string {
    return this.coreService.getHome();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
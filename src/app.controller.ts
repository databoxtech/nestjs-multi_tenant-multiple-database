import { Controller, Request, Post, UseGuards, Get, HttpException, HttpStatus } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppConstants } from './constants';

@Controller()
export class AppController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {

    let tenantId = '';
    const tmp = req.headers[AppConstants.tenantHeader];
    if(tmp instanceof Array){
        tenantId = tmp[0];
    }else{
        tenantId = tmp;
    }
    if (!tenantId) {
      throw new HttpException(`Malformed request`, HttpStatus.BAD_REQUEST);
    }

    return this.authService.login(req.user, tenantId);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

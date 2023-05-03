import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/LoginDto';

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService, private readonly jwtService: JwtService) {}

  @Post('login')
  async login(@Body() data: LoginDto) { 
    const user = await this.authService.validateUser(data);
    const accessToken = await this.authService.generateAccessToken(user);
    return { access_token: accessToken };
    //return this.authService.login(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;  
  }
}
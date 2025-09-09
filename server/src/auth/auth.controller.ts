import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, Request, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'argon2';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private prisma: PrismaService) {}

  @Post('reg') 
  async register(@Body() body: CreateUserDto) {

    const tokens = await this.authService.register(body);

    return tokens;
  }

  @Post('verify')
  async verify(@Body() body: {access_token: string}) {
    return await this.authService.verify(body.access_token)
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user
  }
}

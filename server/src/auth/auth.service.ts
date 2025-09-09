import { forwardRef, Inject, Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2'
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async register(body: CreateUserDto) {
    const user = await this.prisma.user.create({data: body})
    console.log(user)

    const accessToken = await this.generateAccessToken(user.id, user.email)
    const refreshToken = await this.generateRefreshToken(user.id)

    return { accessToken, refreshToken }
  }

  async generateAccessToken(userId: number, email: string): Promise<string> {
    return await this.jwtService.signAsync({userId, email})
  }

  async verify(access_token: string) {
    try {
      await this.jwtService.verifyAsync(access_token);
      return true
    } catch {
      console.log("Fail to verify token");
      return false;
    }
  }

  async generateRefreshToken(userId: number): Promise<string> {
    return await this.jwtService.signAsync({userId}, {expiresIn: '7d'})
  }
  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(email);
    if (await argon2.verify(user?.password, pass)) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
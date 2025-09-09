import { forwardRef, Inject, Injectable, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as argon2 from 'argon2'
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService, 
    private prismaService: PrismaService
  ) {}

  async create(createUserDto: CreateUserDto) {

    const { password, ...userInfo } = await this.prismaService.user.create({
      data: { ...createUserDto, password: await argon2.hash(createUserDto.name) }
    })

    return userInfo;
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(email: string) {
    return this.prismaService.user.findUnique({
      where: {email}
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user =  await this.findOne(id);

    return this.prismaService.user.update({
      where: {id: +user.id},
      data: updateUserDto
    });
  }

  async remove(id: number) {
    return this.prismaService.user.delete({
      where: {id}
    });
  }
}

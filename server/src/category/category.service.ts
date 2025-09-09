import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {

  constructor (private prismaService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {    
    return this.prismaService.category.create({
      data: createCategoryDto
    });
  }

  async findAll(id: number) {
    return await this.prismaService.category.findMany({
      where: {user_id: id}
    });
  }

  async findOne(name: string, user_id: number, id: string) {
    return await this.prismaService.category.findUnique({
      where: {name, user_id, id}
    });
  }

  async remove(id: string) {
    return await this.prismaService.category.delete({
      where: {id: id}
    });
  }
}

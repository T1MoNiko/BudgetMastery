import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards, Request } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service'; 
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() body: {name: string, id: string}, @Request() req) {
    return this.categoryService.create({name: body.name, id: body.id , user_id: req.user.userId})
  }
  
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req) {
    return this.categoryService.findAll(req.user.userId);
  }

  @Get(':name')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('name') name: string, @Request() req) {
    return this.categoryService.findOne(name, req.user.userId, req.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id)
  }
}

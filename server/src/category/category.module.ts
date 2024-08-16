import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from 'src/prisma.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { TransactionModule } from 'src/transaction/transaction.module';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService, TransactionService],
  exports: [CategoryService]
})
export class CategoryModule {}

import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaService } from 'src/prisma.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [],
  controllers: [TransactionController],
  providers: [TransactionService, PrismaService, CategoryService],
  exports: [TransactionService]
})
export class TransactionModule {}

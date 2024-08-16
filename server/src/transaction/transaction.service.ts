import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TransactionService {
  constructor (private prismaService: PrismaService) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.prismaService.transaction.create({
      data: createTransactionDto
    })
  }

  findAll(id: number) {
    return this.prismaService.transaction.findMany({where: {
      user_id: id
    }});
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}

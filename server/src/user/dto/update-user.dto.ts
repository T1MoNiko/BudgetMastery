import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Category } from '@prisma/client';
import { Transaction } from 'typeorm';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name?: string;
    email?: string;
    password?: string;
    category?: Category;
    transaction?: Transaction;
}

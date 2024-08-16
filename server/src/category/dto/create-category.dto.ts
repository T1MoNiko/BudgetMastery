import { User } from '@prisma/client'
import { IsString } from 'class-validator'
import { UserModule } from 'src/user/user.module'
import { Transaction } from 'typeorm'

export class CreateCategoryDto {
    id: string
    name: string
    user_id: number
}

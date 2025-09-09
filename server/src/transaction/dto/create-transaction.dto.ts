import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateTransactionDto {
    id: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    count: number

    category_name?: string
    user_id: number
    category_id?: string

}

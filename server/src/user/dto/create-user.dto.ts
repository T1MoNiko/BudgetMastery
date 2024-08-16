import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
    @MaxLength(30, { message: "Name is short, you gotta enter more letters" })
    @IsString()
    name: string

    @IsEmail()
    email: string

    @MinLength(6, { message: "Password should be great" })
    password: string
}

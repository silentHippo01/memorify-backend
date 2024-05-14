import { IsDate, IsEmail, IsString, Length } from "class-validator";



export class CreateUserDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;

    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректная почта' })
    readonly email: string;

    @IsString({ message: 'Должно быть строкой' })
    @Length(8, 16, { message: 'Не меньше 8 и не больше 16' })
    readonly password: string;

    // @IsDate({ message: 'Должно быть датой' })
    // readonly birth_date: Date;
}

export class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
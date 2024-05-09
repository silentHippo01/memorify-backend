import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private AuthService: AuthService) { }

    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.AuthService.login(userDto);
    }

    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.AuthService.registration(userDto);
    }

}

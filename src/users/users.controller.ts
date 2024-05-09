import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, HttpStatus, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/allUsers')
    getUsers() {
        return this.UsersService.getAllUsers();
    }

    @UsePipes(ValidationPipe)
    create(@Body() dto: CreateUserDto, @Res() res: any) {
        try {
            const newPack = this.UsersService.createUser(dto);

            return res.status(HttpStatus.CREATED).json(newPack);
            // return res.status(201).json(newPack);

        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Ошибка при создании пользователя', error: e })
        }
    }
}

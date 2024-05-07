import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService) { }
    @Get('/allUsers')
    getUsers() {
        return this.UsersService.getAllUsers();
    }
}

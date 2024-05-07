import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>
    ) { }
    async createUser(dto: CreateUserDto) {
        const user = { ...dto };

        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.find();
        // const users = [{ name: 'Frank', age: 25 }, { name: 'Frank2', age: 251 }];
        return users;
    }

}

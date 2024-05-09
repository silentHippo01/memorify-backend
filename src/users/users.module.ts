import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    forwardRef(() => AuthModule), //нужно чтобы не возникало кольцевой зависимости с AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [
    UsersService,
  ]
})
export class UsersModule { }

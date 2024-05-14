import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/user.entity';
import { PacksModule } from 'src/packs/packs.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule), //нужно чтобы не возникало кольцевой зависимости с UsersModule
    PacksModule,
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: { expiresIn: '30d' }
    })
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule { }

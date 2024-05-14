import { Module, forwardRef } from '@nestjs/common';
import { PacksService } from './packs.service';
import { PacksController } from './packs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packs } from './packs.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Packs]),
    forwardRef(() => AuthModule)
  ],
  providers: [PacksService],
  controllers: [PacksController],
  exports: [PacksService],
})
export class PacksModule { }

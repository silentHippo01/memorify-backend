import { Module, forwardRef } from '@nestjs/common';
import { PacksService } from './packs.service';
import { PacksController } from './packs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packs } from './packs.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Cards } from 'src/cards/cards.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Packs, Cards]),
    forwardRef(() => AuthModule)
  ],
  providers: [PacksService],
  controllers: [PacksController],
  exports: [PacksService],
})
export class PacksModule { }

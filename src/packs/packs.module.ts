import { Module } from '@nestjs/common';
import { PacksService } from './packs.service';
import { PacksController } from './packs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packs } from './packs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Packs])],
  providers: [PacksService],
  controllers: [PacksController]
})
export class PacksModule { }

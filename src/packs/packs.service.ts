import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Packs } from './packs.entity';
import { Repository } from 'typeorm';
import { CreatePackDto } from './dto/create-pack.dto';

@Injectable()
export class PacksService {

    constructor(
        @InjectRepository(Packs)
        private packsRepository: Repository<Packs>
    ) { }


    async createPack(dto: CreatePackDto) {
        const newPack = await this.packsRepository.create(dto);
        return this.packsRepository.save(newPack);
    }

    async getAllPacks() {
        const packs = await this.packsRepository.find();
        return packs
    }

    async deletePacks(id: number) { }

}

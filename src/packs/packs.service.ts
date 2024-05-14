import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Packs } from './packs.entity';
import { Repository } from 'typeorm';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';

@Injectable()
export class PacksService {

    constructor(
        @InjectRepository(Packs)
        private packsRepository: Repository<Packs>
    ) { }


    async getUserPacks(id: number) {
        return await this.packsRepository.find({ where: { author_pack: id } })
    }

    async getAllPacks() {
        const packs = await this.packsRepository.find();
        return packs
    }

    async createPack(dto: CreatePackDto, user_id: number) {
        const newPack = await this.packsRepository.create({ ...dto, author_pack: user_id });
        return this.packsRepository.save(newPack);
    }

    async updatePack(id: number, dto: UpdatePackDto) {
        const pack = await this.packsRepository.findOne({
            where: { id_pack: id }
        })

        if (!pack) throw new NotFoundException('Колода не найдена!');

        return this.packsRepository.update({ id_pack: id }, { ...dto })
    }

    async deletePacks(id: number) {
        const pack = await this.packsRepository.findOne({
            where: { id_pack: id }
        });

        if (!pack) throw new NotFoundException('Колода не найдена!');

        return this.packsRepository.delete({ id_pack: id })
    }

}

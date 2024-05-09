import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cards } from './cards.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Cards)
        private packsRepository: Repository<Cards>
    ) { }

    async getAllCards() {
        const cards = await this.packsRepository.find();
        return cards;
    }

    async createCard() { }

    async deleteCard() { }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cards } from './cards.entity';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Cards)
        private cardsRepository: Repository<Cards>
    ) { }

    async getAllCards() {
        const cards = await this.cardsRepository.find();
        return cards;
    }

    async createCard(dto: CreateCardDto) {
        const newCard = await this.cardsRepository.create({
            ...dto,
        });
        return this.cardsRepository.save(newCard);
    }

    async updateCard(id: number, dto: UpdateCardDto) {
        const pack = await this.cardsRepository.findOne({
            where: { id_card: id }
        })

        if (!pack) throw new NotFoundException('Карточка не найдена!');

        return this.cardsRepository.update({ id_card: id }, { ...dto })
    }

    async deleteCard(id: number) {
        const card = await this.cardsRepository.findOne({
            where: { id_card: id }
        });

        if (!card) throw new NotFoundException('Карточка не найдена!');

        return this.cardsRepository.delete({ id_card: id })
    }
}

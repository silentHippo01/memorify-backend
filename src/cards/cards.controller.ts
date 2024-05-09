import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {

    constructor(
        private CardsService: CardsService
    ) { }

    @Get('/')
    getAllCards() {
        return this.CardsService.getAllCards();
    }

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    createCard() {
        try {

        } catch (e) {

        }

    }


}

import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

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
    createCard(@Body() dto: CreateCardDto, @Req() req: any) {
        return this.CardsService.createCard(dto)
    }

    @Patch('update/:id')
    updateCard(
        @Param('id') id: string,
        @Body() updateCardDto: UpdateCardDto
    ) {
        return this.CardsService.updateCard(+id, updateCardDto)
    }

    @Delete('delete/:id')
    deleteCard(@Param('id') id: string) {
        console.log(id)
        return this.CardsService.deleteCard(+id);
    }
}
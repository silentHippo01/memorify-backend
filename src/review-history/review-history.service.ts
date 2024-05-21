import { Injectable } from '@nestjs/common';
import { saveResultDto } from './dto/save-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewHistory } from './review-history.entity';
import { Cards } from 'src/cards/cards.entity';

@Injectable()
export class ReviewHistoryService {

    constructor(
        @InjectRepository(ReviewHistory)
        private packsRepository: Repository<ReviewHistory>,

        @InjectRepository(Cards)
        private cardsRepository: Repository<Cards>
    ) { }


    async saveResults(dto: saveResultDto) {
        console.log(dto)

        return dto
    }
}

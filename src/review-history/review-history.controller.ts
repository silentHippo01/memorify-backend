import { Body, Controller, Post } from '@nestjs/common';
import { ReviewHistoryService } from './review-history.service';
import { saveResultDto } from './dto/save-result.dto';

@Controller('review-history')
export class ReviewHistoryController {

    constructor(
        private ReviewHistoryService: ReviewHistoryService
    ) { }

    @Post('/save_results')
    saveResults(@Body() dto: saveResultDto) {

        return this.ReviewHistoryService.saveResults(dto)
    }
}


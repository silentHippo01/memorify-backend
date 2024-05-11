import { Module } from '@nestjs/common';
import { ReviewHistoryService } from './review-history.service';

@Module({
  providers: [ReviewHistoryService]
})
export class ReviewHistoryModule {}

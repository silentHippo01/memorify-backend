import { Module, forwardRef } from '@nestjs/common';
import { ReviewHistoryService } from './review-history.service';
import { ReviewHistoryController } from './review-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewHistory } from './review-history.entity';
import { Cards } from 'src/cards/cards.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ReviewHistoryService],
  controllers: [ReviewHistoryController],
  imports: [
    TypeOrmModule.forFeature([ReviewHistory, Cards]),
    forwardRef(() => AuthModule)
  ],
})
export class ReviewHistoryModule { }

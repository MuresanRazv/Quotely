import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.schema';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get('random')
  async getRandomQuote(): Promise<Quote | null> {
    return this.quotesService.getRandomQuote();
  }
}

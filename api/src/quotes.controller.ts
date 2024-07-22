import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.model';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getAllQuotes(): Quote[] {
    return this.quotesService.getAllQuotes();
  }

  @Get(':id')
  getQuoteById(@Param('id') id: number): Quote | undefined {
    return this.quotesService.getQuoteById(id);
  }

  @Post()
  addQuote(@Body() quote: Quote) {
    this.quotesService.addQuote(quote);
  }
}

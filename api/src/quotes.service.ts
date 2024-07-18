import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote, QuoteDocument } from './quote.schema';

@Injectable()
export class QuotesService {
  constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}

  async getRandomQuote(): Promise<Quote | null> {
    const count = await this.quoteModel.countDocuments();
    const random = Math.floor(Math.random() * count);

    return this.quoteModel.findOne().skip(random).exec();
  }
}

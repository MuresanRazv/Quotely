import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote, QuoteDocument } from './quote.schema';

@Injectable()
export class QuotesService {
  constructor(@InjectModel(Quote.name) private quoteModel: Model<QuoteDocument>) {
    // Initial quotes
    const initialQuotes = [
      { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
      { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
      { text: 'The future belongs to those who believe in the beauty of their dreams.',  author: 'Eleanor Roosevelt' }
    ];

    // Insert initial quotes if the collection is empty
    this.quoteModel.countDocuments().then(count => {
      if (count === 0) {
        this.quoteModel.insertMany(initialQuotes);
      }
    });
  }

  async findAll(): Promise<Quote[]> {
    return this.quoteModel.find().exec();
  }

  async getRandomQuote(): Promise<Quote> {
    const count = await this.quoteModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    return this.quoteModel.findOne().skip(random).exec();
  }
}

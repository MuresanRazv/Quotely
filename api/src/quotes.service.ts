import { Injectable } from '@nestjs/common';
import { Quote } from './quote.model';
import * as fs from 'fs';

const quotesFile = 'quotes.json';

// Quotes are stored in a json file and data is easily persisted by creating a named volume using -v command when creating a container
// By specifying the name of the volume like so: "name:/path" we create a named volume
// Excluding the name part, we create an unnamed volume (harder to persist data since you need to search for its path in the system)

@Injectable()
export class QuotesService {
  private quotes: Quote[] = [];

  constructor() {
    this.loadQuotes();
  }

  private loadQuotes() {
    try {
      const data = fs.readFileSync(quotesFile, 'utf8');
      this.quotes = JSON.parse(data);
    } catch (err) {
      // handle error (e.g., create empty file)
      console.error('Error loading quotes:', err);
      this.quotes = [];
    }
  }

  private saveQuotes() {
    fs.writeFileSync(quotesFile, JSON.stringify(this.quotes, null, 2));
  }

  getAllQuotes(): Quote[] {
    return this.quotes;
  }

  getQuoteById(id: number): Quote | undefined {
    return this.quotes.find((quote) => quote.id === id);
  }

  addQuote(quote: Quote) {
    const newId = this.quotes.length ? Math.max(...this.quotes.map((q) => q.id)) + 1 : 1;
    quote.id = newId;
    this.quotes.push(quote);
    this.saveQuotes();
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type QuoteDocument = HydratedDocument<Quote>;

@Schema({ collection: 'quotes' })
export class Quote {
  @Prop()
  text: string;

  @Prop()
  author: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);

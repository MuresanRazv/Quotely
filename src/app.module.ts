import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesModule } from './quotes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/quotely'),
    QuotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

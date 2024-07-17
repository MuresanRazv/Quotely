import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesModule } from './quotes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Will use them when I learn about docker compose
    // MongooseModule.forRoot('mongodb://localhost/quotely'),
    // QuotesModule
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Environment: ' + process.env.NODE_ENV;
  }
}

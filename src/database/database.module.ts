import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rahmon:localhost5000@cluster0.qf6u3fu.mongodb.net/LEARN?retryWrites=true&w=majority')],
})
export class DataModule {}

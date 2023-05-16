import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { TaskModule } from './task/task.module';
import { CustomerModule } from './customer/customer.module';
import { DataModule } from './database/database.module';


@Module({
  imports: [ DataModule,UserModuleModule, TaskModule , CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserModuleController } from './user-module.controller';
import { UserModelService } from './user-module.service';

@Module({
  controllers: [UserModuleController],
  providers: [UserModelService]

})
export class UserModuleModule {}

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModuleController } from './user-module.controller';
import { UserModelService } from './user-module.service';
import { UserMiddleware } from './middleware/user.middleware ';


@Module({
  controllers: [UserModuleController],
  providers: [UserModelService]

})
export class UserModuleModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes( { path:'user-module', method:RequestMethod.POST});
  }
}

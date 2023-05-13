import { Controller ,Get ,Body, Post, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import { UserModelService } from './user-module.service';
import { UserDto } from './dto';
@Controller('user-module')
export class UserModuleController {
    constructor( private readonly userService:UserModelService){}

    @Post('/pushUser')
    @UsePipes( new ValidationPipe)
    Push(@Body() user:UserDto ){
       return this.userService.PushUSer(user)
    }

    @Get("/:email")

    GetUSer(@Param() email:String):String {
        return email

    }



}

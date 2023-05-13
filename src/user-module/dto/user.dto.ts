

import { IsString, IsInt , IsEmail ,IsNotEmpty, isString} from 'class-validator';


 export class UserDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:String
    @IsNotEmpty()
    @IsString()
    id:String
}
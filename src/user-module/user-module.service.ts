import { Injectable } from "@nestjs/common";
import { user } from "./interface/user";

@Injectable()
export class UserModelService {
  constructor(){}

  public Users: user[] = []; // Initialize the Users array

  PushUSer(user:user):user {
    this.Users.push(user)
    return user
  }
}

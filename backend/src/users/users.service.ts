import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomStringGenerator } from "./utils/users.utils";
import { UserDto } from "./dto/user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor (private jwtService: JwtService, @InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userDto: UserDto): Promise<User> {
    const payload = {
      id: randomStringGenerator(),
      userName: userDto.userName
    };

    const addedUser = new this.userModel({
      id: payload.id,
      userName: payload.userName,
      token: this.jwtService.sign(payload)
    });
    
    return addedUser.save().then(userDocument => {
      return {
        userName: userDocument.userName,
        token: userDocument.token
      }
    });
  }
}

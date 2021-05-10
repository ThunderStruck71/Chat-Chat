import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomStringGenerator } from "./utils/users.utils";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
  constructor (private jwtService: JwtService) {}

  create(userDto: UserDto) {
    const payload = {
      id: randomStringGenerator(),
      userName: userDto.userName
    };

    return {
      id: payload.id,
      userName: payload.userName,
      token: this.jwtService.sign(payload)
    };
  }
}

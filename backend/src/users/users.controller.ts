import {
  Controller,
  Post,
  Body,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("login")
  login(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }
}

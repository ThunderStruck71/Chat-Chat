import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [UsersModule, MongooseModule.forRoot("mongodb://localhost:27017/chat_chat_app", {useNewUrlParser: true})],
  controllers: [],
  providers: [],
})
export class AppModule {}

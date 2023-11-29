import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from "../user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/user";
import { Account } from "../user/account";
import { AccountRepository } from "../user/account.repository";
import { MovieService } from "../movie/movie.service";
import { ConfigModule } from "@nestjs/config";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./jwt.strategy";
import {UserRepository} from "../user/user.repository";
import {GoogleStrategy} from "./google.strategy";
import {FacebookStrategy} from "./facebook.strategy";





@Module({
  imports: [TypeOrmModule.forFeature([User,Account]),ConfigModule.forRoot(),
    JwtModule.register({
    }),
    PassportModule.register({ defaultStrategy: 'jwt',session: false})],
  controllers: [AuthController],
  providers: [AuthService,UserService,AccountRepository,
    MovieService,JwtService,JwtStrategy,UserRepository,
    GoogleStrategy,FacebookStrategy]
})
export class AuthModule {


}

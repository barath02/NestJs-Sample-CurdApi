import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
  //   TypeOrmModule.forRoot({
  //   type: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: 'root@123',
  //   database: 'NestJs_Tutorial',
  //   entities: [User],
  //   synchronize: true,
  // }),
  TypeOrmModule.forFeature([User]),  //configuration for user repository 
  JwtModule.register({
    secret:'secret',
    signOptions : {expiresIn: '1d'}
  })

],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

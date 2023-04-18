import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UsersController } from './users/users.controller';
import { User } from "./users/entity/user.entity";
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { Todo } from './todo/entity/todo.entity';
import { CatsController } from './cats/cats.controller';

console.log(__dirname + "\**\*entity{.ts,.js}")
@Module({
        imports: [
          JwtModule.register({
            secret: 'your-secret-key',
          }),
          ConfigModule.forRoot({ isGlobal: true }),
          TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'password',
              database: 'quiz',
              synchronize: false,
              entities: [User,Todo],  //["src/entity/**/*.ts"], 
              migrations: ["src/migration/**/*.ts"],
            }),
            inject: [ConfigService],
          }), UsersModule, AuthModule, TodoModule], 
        controllers: [CatsController],
        providers: [],
      })
      export class AppModule {}

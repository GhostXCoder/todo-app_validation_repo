import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersModule } from "./users.module";
import { User } from './entity/user.entity';
import { Observable } from 'rxjs';
import { UserDto } from './dto/User.dto';
import { CreateUserDto } from './CreateUserDto';
import { LoginDto } from '../auth/dto/LoginDto';
import * as bcrypt from 'bcrypt';

//import { CreateUserDto } from './users/entity/CreateUserDto';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('me')
  getMe() {
    
  }
 @Get(':id')
 show(@Param('id') id: string){
  return this.userService.showById(+id);
 }

    @Post('signup')
  async signup(@Body() data: UserDto){
    console.log (data)
    
    
    const user = await this.userService.createUser(data.username, data.password);
    //return this.userService.createUser(CreateUserDto);
    return { id: user.id, email: user.username};
  }

    }
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersModule } from "./users.module";
import { User } from './entity/user.entity';
import { Observable } from 'rxjs';
import { UserDto } from './dto/User.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('me')
  getMe() {
    
  }
 
    @Post('signup')
  async signup(@Body() data: UserDto){
    console.log (data)
    const user = await this.userService.createUser(data.username, data.password);
    return { id: user.id, email: user.username};
  }
    }





import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entity/user.entity';
import {UserDto} from '../users/dto/User.dto';
import { LoginDto } from './dto/LoginDto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}
//username: string password: string
  async validateUser(LoginDto: LoginDto): Promise <User> {
    // ... validate the user and return a User object if the credentials are valid
    const user = await this.userRepository.findOne({ where: { username: LoginDto.username } })
    console.log('user', user)
    if (!(await user?.validatePassword(LoginDto.password))) {
      throw new UnauthorizedException();
    //if(user && user.validatePassword(password)) {
    }
    return user;   
   // throw new NotFoundException('User not found');
  }

  async generateAccessToken(user: User): Promise<string> {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.signAsync(payload, { expiresIn: "1d" });
  }
//verify username
  async findUserByUsername (username: string): Promise<User>{
    return this.userRepository.findOne({where:{username}})
  }
 
  async verifyToken(token: string) {
    return this.jwtService.verifyAsync(token);
  }
}
// auth.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise <any> {
    // ... validate the user and return a User object if the credentials are valid
    const user = await this.userRepository.findOne({ where: { username: username, password: password } })
    console.log('user', user)
    if(user) {
      return user;
    }

    throw new NotFoundException('User not found');
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
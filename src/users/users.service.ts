import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { clearScreenDown } from 'readline';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
//export type User = any;
const newUser = {
  id: uuidv4(Any),
  name: 'Johnny',
  email: 'johnny@example.com',
  // ...
};clearScreenDown

@Injectable()
export class UsersService {
  showById(arg0: number) {
    throw new Error('Method not implemented.');
  }
  username: any;
  userId: any;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    // 
    console.log('User', User)
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }
  
  async createUser(username: string, password: string): Promise<User | undefined> {
    try {
      const salt = bcrypt.genSaltSync(10);
         //this.users.find(user => user.username === username);
    const user = {
      username,
      password: bcrypt.hashSync(password, salt),
    };
    console.log(user)
    return await this.userRepository.save(user);
    } catch (error) {
      console.log(error)
      throw new BadRequestException("username is already been used.")
    }
  }
}
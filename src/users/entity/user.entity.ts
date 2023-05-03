import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Index

} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../CreateUserDto';

@Entity("user")
export class User {
  static create(CreateUserDto: CreateUserDto) {
    throw new Error('Method not implemented.');
  }
  static sub(sub: any, id: string) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
   id: number;

   @Column({ unique: true })
  username: string;

   @Column()
  password: string;

   @Column()
  createDate: Date;



  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  }
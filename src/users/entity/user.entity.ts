import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity("user")
export class User {
  static sub(sub: any, id: string) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
   id: number;

  @Column({ unique: true })
  username: string;

   @Column()
  password: string;
}
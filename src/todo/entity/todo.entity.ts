import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../users/entity/user.entity';

@Entity("todo")
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  Task: string;

  @Column()
  Description: string;

  @Column()
  Due_date: Date;

  @Column()
  Priority: string;
  
  @Column()
  Status: string;

  @Column()
  Assignee: string;

  @Column()
  Notes: string;

  @Column()
  Tags: string;

  @Column()
  Checklist: string;

  @Column()
  Time_estimation: string;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}

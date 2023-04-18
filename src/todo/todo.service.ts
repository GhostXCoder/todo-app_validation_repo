import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { User } from './user.entity';
import { Todo } from './entity/todo.entity';
import { TodoDto } from '../auth/dto/TodoDto';

@Injectable()
export class TodoService {
  getAlltodo() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(userId: number): Promise<Todo[]> {
    return await this.todoRepository.find({
      where: {
        userId: userId
      }
    });
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todoRepository.findOne({ where: { id: id } });
  }

  async create(todoDto: TodoDto): Promise<Todo> {
    const todo = Object.assign(new Todo(), todoDto);
    // const todo = new Todo();
    // todo.title = todoDto.title;
    // todo.completed = todoDto.completed || false;
    // console.log('entity', todo)
    return await this.todoRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo> {
    // const Todo = await this.todoRepository.findOne({ where: { id: id } });
    // todo.title = todo.title || todo.title;
    // todo.completed = todo.completed || todo.completed;
    // return await this.todoRepository.save(todo);
    await this.todoRepository.update(id, todo);
    return await this.todoRepository.findOne({ where: { id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }

  async checkTodo(userId: number, id: number) {
    return await this.todoRepository.findOne({
      where: {
        userId: userId,
        id: id
      }
    });
  }
}
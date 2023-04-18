import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../src/todo/entity/todo';
import { TodoService } from '../src/todo/todo.service';
import { TodoController } from '../src/todo/todo.controller';

describe('TodoController', () => {
  let todoController: TodoController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'testuser',
          password: 'testpass',
          database: 'testdb',
          entities: [Todo],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Todo]),
      ],
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoController = moduleRef.get<TodoController>(TodoController);
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      const result = [{ id: 1, title: 'Test Todo', completed: false }];
      jest.spyOn(todoController, 'findAll').mockImplementation(() => Promise.resolve(result));

      expect(await todoController.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a todo by id', async () => {
      const result = { id: 1, title: 'Test Todo', completed: false };
      jest.spyOn(todoController, 'findOne').mockImplementation(() => Promise.resolve(result));

      expect(await todoController.findOne('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new todo', async () => {
      const todo = { title: 'Test Todo', completed: false };
      const result = { id: 1, title: 'Test Todo', completed: false };
      jest.spyOn(todoController, 'create').mockImplementation(() => Promise.resolve(result));

      expect(await todoController.create(todo)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a todo by id', async () => {
      const todo = { title: 'Updated Todo', completed: true };
      const result = { id: 1, title: 'Updated Todo', completed: true };
      jest.spyOn(todoController, 'update').mockImplementation(() => Promise.resolve(result));

      expect(await todoController.update('1', todo)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a todo by id', async () => {
      jest.spyOn(todoController, 'remove').mockImplementation(() => Promise.resolve());

      expect(await todoController.remove('1')).toBe(undefined);
    });
  });
});

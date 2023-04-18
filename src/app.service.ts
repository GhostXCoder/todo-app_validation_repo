export class AppService {
  getHello(): string {
    throw new Error('Method not implemented.');
  }
  private readonly todos = [];

  create(todo: string) {
    this.todos.push(todo);
  }

  findAll() {
    return this.todos;
  }
}

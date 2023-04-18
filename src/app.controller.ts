import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormDto } from './app.dts';
import { AppService } from './app.service';

@Controller()
export class AppController {
  todoService: any;
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body('Todo') todo: string) {
    this.todoService.create(todo);
  }
  @Post()
  public form(@Body() body: FormDto): FormDto {
    return body;
  }
  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  async findAll() {
    return this.todoService.findAll();
  }
}
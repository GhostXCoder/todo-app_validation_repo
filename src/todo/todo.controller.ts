import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Header,
  Headers, 
  ForbiddenException,
  NotFoundException,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { TodoDto } from '../auth/dto/TodoDto';
import { TodoService } from './todo.service'; 
import { AuthService } from "../auth/auth.service";
import { User } from '../users/entity/user.entity';
import { UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { EntityTodoDto } from './todo.dto';

@Controller('todo') 

export class TodoController {
  entryService: any; 
  recordService: any;
    constructor(
    private readonly todoService: TodoService,
    private readonly authService: AuthService
  ) {} 
  
    @Get()
  async findAll( @Headers('Authorization') token: string): Promise<Todo[]> {  
    try {
      const user = await this.authService.verifyToken(token);
      console.log('user',user.username)
      const userExist = await this.authService.findUserByUsername(user.username)   
      // verification if username and password is registered.
      // const userId = user.authService.verifyToken;
      if (!userExist) throw new NotFoundException("User not found");
      return await this.todoService.findAll(user.sub);

    } catch(error) { 
      console.log (error)
      throw new NotFoundException(error.response?.message);   
    }
     
  }

  @Get(':id')
   async findOne(@Param('id') id: number, userId: number, @Headers('Authorization') token: string): Promise<Todo> {
    try {

      const user = await this.authService.verifyToken(token);
      console.log('user',user.username)
      const userExist = await this.authService.findUserByUsername(user.username)
      const result = await user.findOne({ id: 'id' });
      console.log(result);
         
      // verification if username and password is registered.
      // const userId = user.authService.verifyToken;
      if (!userExist) throw new NotFoundException("User not found");
      // check if todo data is from user create
      const check = await this.todoService.checkTodo(user.sub, id); 
      console.log(check)
      if(!check) {
        throw new NotFoundException(' not found');
      }
      return await this.todoService.findOne(id);

    } catch(error) { 
      console.log (error)
      throw new NotFoundException(error.response?.message);   
    }
     
  }

  @Get('/')
  getAllTodo() {
    return this.todoService.getAlltodo();
  }
  createTodo(@Body()todoData){
    return {'data': todoData};

  }


  @Post("save")
  //decrypt code. 
    async create(@Body() todo: EntityTodoDto, @Headers('Authorization') token: string): Promise<any> {
    const user = await this.authService.verifyToken(token);
    
    

 //to insert decrypted userId token.
    if(!user) {
      throw new ForbiddenException("user not found"); 
    }
    console.log('token', token)
    console.log('todo', todo)
    todo.userId = user.sub;
    return await this.todoService.create(todo); 
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() todo: EntityTodoDto, @Headers('Authorization') token: string): Promise<void> {
  
    try {
      
      const user = await this.authService.verifyToken(token);
      console.log('user',user.username)

      const userExist = await this.authService.findUserByUsername(user.username)
      
      // verification if username and password is registered.
      // const userId = user.authService.verifyToken;

      if (!userExist) throw new NotFoundException("User not found");
      // check if todo data is from user create
      const check = await this.todoService.checkTodo(user.sub, id);
      console.log(check)
      if(!check) {
        throw new NotFoundException('Todo not found');
      }
      await this.todoService.update(id, todo);

    } catch(error) { 
      throw new NotFoundException(error.response.message);   
    }
            
}

   @Delete(':id')
  async delete(@Param('id') id: number, @Body() todo: EntityTodoDto, @Headers('Authorization') token: string): Promise<void> {
    try {
      
      const user = await this.authService.verifyToken(token);
      console.log('user',user.username)

      const userExist = await this.authService.findUserByUsername(user.username)
      
      // verification if username and password is registered.
      // const userId = user.authService.verifyToken;

      if (!userExist) throw new NotFoundException("User not found");
      // check if todo data is from user create
      const check = await this.todoService.checkTodo(user.sub, id);
      console.log(check)
      if(!check) {
        throw new NotFoundException('Todo is not from client data');
      }
      await this.todoService.delete(id);

    } catch(error) { 
      console.log(error)
      throw new NotFoundException(error.response?.message);

    }
 
  }
}
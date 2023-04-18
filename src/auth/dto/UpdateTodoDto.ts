import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './CreateTodoDto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}

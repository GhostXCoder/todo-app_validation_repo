import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator";

//import { Length } from "class-validator/types/decorator/decorators";

export class EntityTodoDto {
    @IsOptional()
    userId: number;

    @IsOptional()
    id: number;

    @IsNotEmpty()
    @Length(3)
    @IsString()
    Task: string;

    @IsNotEmpty()
    @Length(5)
    @IsString()
    Description: string;

    @IsNotEmpty()
    Due_Date: string;

    @IsNotEmpty()
    @Length(5)
    @IsString()
    Priority: string;

    @IsNotEmpty()
    @Length(5)
    @IsString()
    Remarks: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Status: string;

    
    @IsNotEmpty()
    @Length(10)
    @IsString()
    Notes: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Assignee: string;

   
    @IsNotEmpty()
    @Length(10)
    @IsString()
    Tags: string;
   
    @IsNotEmpty()
    @Length(10)
    @IsString()
    Checklist: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Time_estimation: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsBoolean()
    completed: boolean;
}



import { IsBoolean, IsDate, IsNotEmpty, IsString, Length} from "class-validator";
//import { Length } from "class-validator/types/decorator/decorators";

export class EntityTodoDto {
@IsNotEmpty({message:"user need to fill out the field."})

//@length(3, 20)
@IsNotEmpty()
    @Length(10)
    @IsString()
    id: number;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    userId: number;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Task: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Description: string;

    @IsNotEmpty()
    @Length(10)
    @IsDate()
    Due_date: Date;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Priority: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Status: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Assignee: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    Notes: string;
   
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
    @Length(10)
    @IsBoolean()
    completed: boolean;
}






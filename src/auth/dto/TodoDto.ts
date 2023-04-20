
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";
export class TodoDto {

      @IsNotEmpty()
    @IsNumber()
    @Max(7)
    @Min(1)
    readonly userId: number;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Task: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Description: string;

    @IsNotEmpty()
    @Max(10)
    @Min(1)
    readonly Due_date: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Priority: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Assignee: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Notes: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Tags: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Checklist: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly Time_estimation: string;

    @IsNotEmpty()
    @IsString()
    @Max(10)
    @Min(1)
    readonly title: string;

    @IsNotEmpty()
    @IsBoolean()
    @Max(10)
    @Min(1)
    readonly completed: boolean;
   
  }




    

   
  
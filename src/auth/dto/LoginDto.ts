import { IsNotEmpty, IsString, Max, Min } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
   
    username: string;

    @IsNotEmpty()
    @IsString()
  
    password: string;
  }
  
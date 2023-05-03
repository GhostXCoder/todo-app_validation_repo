import { IsNotEmpty, IsString, Max, Min } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
   

    //email: string;
    username: string;

    @IsNotEmpty()
    @IsString()
  
    password: string;
  }
  

  export class AuthLoginDto {
    @IsString()
    username: string;
  
    @IsNotEmpty()
    password: string;
  }
import { IsEmail, Validate, IsNotEmpty, IsNumber, IsString, Max, Min   } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CustomUserValidation } from './validator_constraint';


export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @Validate(CustomUserValidation)

  email: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(15)
  @Min(1)
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Max(12)
  @Min(1)
  readonly password: string;
}




  

  
  
import { IsNotEmpty, IsString, Length, Validate} from "class-validator";
import { CustomUserValidation } from "../validator_constraint";


//import { Length } from "class-validator/types/decorator/decorators";

export class UserDto {
    @IsNotEmpty({message:"Username and password is empty"})
    //@IsUnique ({message: 'Username already exists'})
    //@length(3, 20)
    
    @IsNotEmpty()
    @IsString()
    @Validate(CustomUserValidation)
    username: string;

    @IsNotEmpty()
    @Length(3)
    @IsString()
    password: string;
   
}


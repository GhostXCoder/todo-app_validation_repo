import { IsNotEmpty, IsString, Length} from "class-validator";


//import { Length } from "class-validator/types/decorator/decorators";

export class UserDto {
    @IsNotEmpty({message:"The username should have a username and password"})
    //@IsUnique ({message: 'Username already exists'})
    //@length(3, 20)
    
    @IsNotEmpty()
    @Length(3, 5)
    @IsString()
    username: string;

    @IsNotEmpty()
    @Length(3)
    @IsString()
    password: string;
   
}


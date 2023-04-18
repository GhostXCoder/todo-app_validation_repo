import { IsNotEmpty, IsString, Length} from "class-validator";
//import { Length } from "class-validator/types/decorator/decorators";

export class UserDto {
@IsNotEmpty({message:"The username should have a name"})

//@length(3, 20)
    @IsNotEmpty()
    @Length(10)
    @IsString()
    username: string;

    @IsNotEmpty()
    @Length(10)
    @IsString()
    password: string;
   
}
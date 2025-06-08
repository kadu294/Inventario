import { IsEmail, IsString } from "class-validator";

export class CreateMachineDto {

    @IsString()
    name: string
    
    @IsEmail()
    email: string
}

import { IsString,Min 
, IsInt, IsPositive, MinLength } from "class-validator";
export class CreatePokemonDto {

  @IsInt()
  @IsPositive()
  @Min(1)
  no:number;

  @IsString()
  @MinLength(1)
  name:string;
}

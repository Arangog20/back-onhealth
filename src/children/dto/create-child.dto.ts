import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateChildDto {
    @IsOptional()
    @IsMongoId()
    _id: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    identityCard:number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    municipality: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    vaccine: string;
}

import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

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

    @IsNotEmpty()
    @ApiProperty({ type: Date })
    birthDate: Date;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    municipality: string;

    @IsArray()
    @IsOptional()
    @ApiProperty({
      type: [String], 
      description: 'Arreglo de  vacunas que ha recibido el niño'
    })
    vaccine?: string[];
}

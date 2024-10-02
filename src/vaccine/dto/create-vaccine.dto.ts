import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateVaccineDto {
  @IsOptional()
  @IsMongoId()
  _id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  vaccineName: string;

  @IsNumber()
  @Min(0, { message: 'La edad mínima debe ser un valor positivo.' })
  @ApiProperty({
    description:
      'Edad mínima a partir de la cual se puede suministrar la vacuna',
  })
  restrictions: number;
}

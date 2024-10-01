import { Controller, Get, Post, Body,  Param, Delete, Put } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';

@Controller('vaccine')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post('/create')
  create(@Body() createVaccineDto: CreateVaccineDto) {
    return this.vaccineService.create(createVaccineDto);
  }

  @Get('/find-all')
  findAll() {
    return this.vaccineService.findAll();
  }

  @Get('/find/:vaccine-name')
  findOne(@Param('vacconeName')vaccineName: string) {
    return this.vaccineService.findOne(vaccineName);
  }

  @Put('/update/:vaccine-name')
  update(@Param('vacconeName')vacconeName: string, @Body() updateVaccineDto: UpdateVaccineDto) {
    return this.vaccineService.update(vacconeName, updateVaccineDto);
  }

  @Delete('/delete/:vaccine-name')
  remove(@Param('vacconeName') vacconeName: string) {
    return this.vaccineService.Delete(vacconeName);
  }
}

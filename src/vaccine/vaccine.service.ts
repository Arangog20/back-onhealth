import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccine } from './entities/vaccine.entity';
import { Model } from 'mongoose';

@Injectable()
export class VaccineService {
  constructor(
    @InjectModel(Vaccine.name)
    private readonly vaccineModel: Model<Vaccine>
){}
  
  async create(createVaccineDto: CreateVaccineDto) {
   createVaccineDto.vaccineName = createVaccineDto.vaccineName.toLocaleLowerCase();

    const existingVaccinate = await this.vaccineModel.findOne({vaccineName: createVaccineDto.vaccineName}).exec();

    if (existingVaccinate) {
      throw new HttpException(
        `Vaccine with name ${createVaccineDto.vaccineName} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const newVaccine = new this.vaccineModel(createVaccineDto);
    return newVaccine.save();
  }

  async findAll(): Promise<Vaccine[]> {
    const vaccines = await this.vaccineModel.find().exec();
    if (!vaccines || vaccines.length === 0) {
      throw new HttpException('No se encontraron vacunas', HttpStatus.NOT_FOUND);
    }
    return vaccines;
  }

  async findOne(vaccineName: string): Promise<Vaccine> {
    const vaccine = await this.vaccineModel.findOne({ vaccineName }).exec();
    if (!vaccine) {
      throw new HttpException('Vacuna no encontrada', HttpStatus.NOT_FOUND);
    }
    return vaccine;
  }

  async update(vaccineName: string, updateVaccineDto: UpdateVaccineDto): Promise<Vaccine> {
    const updatedVaccine = await this.vaccineModel.findOneAndUpdate({ vaccineName }, updateVaccineDto, { new: true }).exec();
    if (!updatedVaccine) {
      throw new HttpException('Vacuna no encontrada', HttpStatus.NOT_FOUND);
    }
    return updatedVaccine;
  }

 
  async Delete(vaccineName: string): Promise<void> {
    const result = await this.vaccineModel.findOneAndDelete({ vaccineName }).exec();
    if (!result) {
      throw new HttpException('Vacuna no encontrada', HttpStatus.NOT_FOUND);
    }
  }
}


import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Child } from './entities/child.entity';
import { Model } from 'mongoose';
import { ColumnHstoreOptions } from 'typeorm/decorator/options/ColumnHstoreOptions';

@Injectable()
export class ChildrenService {
  constructor(
    @InjectModel(Child.name)
    private readonly childModel: Model<Child>
  ){}


 async create(createChildDto: CreateChildDto): Promise<Child> {
  const existingChild = await this.childModel.findOne({ identityCard: createChildDto.identityCard }).exec();

    if (existingChild) {
      throw new BadRequestException('Este niño ya está registrado con este identityCard.');
    }

    const newChild = new this.childModel(createChildDto);
    return newChild.save();
  }
  

 async findAll(): Promise <Child[]> {
    const child = await this.childModel.find().exec();
    if(!child || child.length === 0){
      throw new HttpException('No se encontraron niños', HttpStatus.NOT_FOUND)
    }
    return child ;
  }

  async findOne(identityCard: number):Promise <Child> {
    const findChild = await this.childModel.findOne({identityCard}).exec();
    if(!findChild){
      throw new HttpException('No se encontró el niño', HttpStatus.NOT_FOUND)
    }
    return  findChild;
  }

 async update(identityCard: number, updateChildDto: UpdateChildDto): Promise<Child> {
    const updateChild = await this.childModel.findOneAndUpdate({identityCard}, updateChildDto, {new: true}).exec();
    if(!updateChild){
      throw new HttpException('No se encontró el niño', HttpStatus.NOT_FOUND)
    }
    return updateChild;
  }

  async Delete (identityCard: number): Promise <string> {
    const deleteChild = await this.childModel.findOneAndDelete({identityCard}).exec();
    if(!deleteChild){
      throw new HttpException('No se encontró el niño', HttpStatus.NOT_FOUND)
    }
    return `niño con la identificacion ${identityCard} eliminado correctamente`;
  }
}

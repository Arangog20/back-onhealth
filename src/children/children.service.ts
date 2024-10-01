import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Child } from './entities/child.entity';
import { Model } from 'mongoose';

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
  

  findAll() {
    return `This action returns all children`;
  }

  findOne(id: number) {
    return `This action returns a #${id} child`;
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return `This action updates a #${id} child`;
  }

  remove(id: number) {
    return `This action removes a #${id} child`;
  }
}

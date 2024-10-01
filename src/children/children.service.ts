import { Injectable } from '@nestjs/common';
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


 async create(createChildDto: CreateChildDto): promise<Child> {
  const existingChild = await this.childModel.findOne({})
    return 'This action adds a new child';
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

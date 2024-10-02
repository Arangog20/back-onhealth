import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Post('/create')
  create(@Body() createChildDto: CreateChildDto) {
    return this.childrenService.create(createChildDto);
  }

  @Get('/find-all')
  findAll() {
    return this.childrenService.findAll();
  }

  @Get('/find/:identityCard')
  findOne(@Param('identityCard') identityCard: number) {
    return this.childrenService.findOne(identityCard);
  }

  @Put('/update/:identityCard')
  update(@Param('identityCard') identityCard: number, @Body() updateChildDto: UpdateChildDto) {
    return this.childrenService.update(identityCard, updateChildDto);
  }

  @Delete('/delete/:identityCard')
  remove(@Param('identityCard') identityCard: number) {
    return this.childrenService.Delete(identityCard);
  }
}

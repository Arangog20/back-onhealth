import { Module } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { ChildrenController } from './children.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Child, ChildSchema } from './entities/child.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Child.name, schema: ChildSchema}
    ])
  ],
  controllers: [ChildrenController],
  providers: [ChildrenService],
})
export class ChildrenModule {}

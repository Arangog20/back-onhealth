import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({timestamps: true })
export class Child extends Document {

    @Prop({ required: true, unique: true })
    identityCard:number;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    municipality : string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    vaccine: string;
}

export const ChildSchema = SchemaFactory.createForClass(Child);

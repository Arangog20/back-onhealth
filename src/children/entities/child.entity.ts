import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { Vaccine } from "src/vaccine/entities/vaccine.entity";

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
    birthDate: Date;

    @Prop({ type: Types.ObjectId, ref: 'Vaccine',required: false })
    vaccine: Vaccine [];
}

export const ChildSchema = SchemaFactory.createForClass(Child);

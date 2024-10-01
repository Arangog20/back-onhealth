import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: true })
export class Vaccine extends Document {

    @Prop({required: true, unique: true })
    vaccineName: string;

    @Prop({required: true,  min: 0 })
    restrictions: number;

}
 export const VaccineSchema = SchemaFactory.createForClass(Vaccine);
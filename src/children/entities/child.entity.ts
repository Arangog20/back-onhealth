import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true })
export class Child extends Document {

    @Prop({ required: true })
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

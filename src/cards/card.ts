import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Card extends Document{

    @Prop()
    name: string;

    @Prop()
    color: string;

    @Prop()
    rarity: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);

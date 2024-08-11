import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './card';
import { Model } from 'mongoose';

@Injectable()
export class CardsService {
    constructor(@InjectModel(Card.name) private cardModel: Model<Card>){}

    async getAllCards(): Promise<Card[]>{
        return this.cardModel.find().exec();
    }

    async create(card: Card): Promise<Card>{
        const cardCreated = new this.cardModel(card);
        return cardCreated.save();
    }

    async getCardById(id : string): Promise<Card>{
        return this.cardModel.findById(id).exec();
    }

    async update(id: string, card: Card): Promise<Card>{
        return this.cardModel.findByIdAndUpdate(id, card).exec();
    }

    async delete(id: string){
        const cardDeleted = this.cardModel.findOneAndDelete({_id: id}).exec();
        return await cardDeleted;
    }
}

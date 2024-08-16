import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './card';
import { Model } from 'mongoose';
import { CardInterface } from './card.interface';

@Injectable()
export class CardsService {
    constructor(@InjectModel(Card.name) private cardModel: Model<Card>) { }

    async getAllCards(): Promise<Card[]> {
        return await this.cardModel.find().exec();
    }

    async create(card: Card | CardInterface): Promise<Card> {
        const cardCreated = new this.cardModel(card);
        return await cardCreated.save();
    }

    async getCardById(id: string): Promise<Card> {
        return await this.cardModel.findById(id).exec();
    }

    async update(id: string, card: Card): Promise<Card> {
        return await this.cardModel.findByIdAndUpdate(id, card).exec();
    }

    async delete(id: string) {
        const cardDeleted = this.cardModel.findOneAndDelete({ _id: id }).exec();
        return await cardDeleted;
    }

    async allCards(color: string) {
        const response = await fetch(`https://api.scryfall.com/cards/search?q=c%3A${color}&unique%3Dcards`);
        const responseData = await response.json()
        const data = await responseData.data.slice(0, 99);
        for (const card of data) {
            let colors = card.color_identity.map((color) => color);
            let cardsAll: CardInterface = {
                name: card.name,
                description: card.oracle_text,
                colors: colors,
                type: card.type_line,
                mana: card.mana_cost,
                power: card.power,
                toughness: card.toughness
            }
            await this.create(cardsAll);
        }
    }

    async createDeckByLegendary(legend: string){
        try {
            await this.cardModel.deleteMany()
            const response = await fetch(`https://api.scryfall.com/cards/search?q=name%3A${legend}`);
            if (!response) {
                throw new Error(`HTTP error! status: ${(await response).status}`)
            }

            const responseData: any = await response.json();
            const obj: any = responseData.data[0];
            const colors = obj.color_identity.map((color) => color)

            const card: CardInterface = {
                name: obj.name,
                description: obj.oracle_text,
                colors: colors,
                type: obj.type_line,
                mana: obj.mana_cost,
                power: obj.power,
                toughness: obj.toughness
            }

            await this.allCards(colors[0]);
            await this.create(card);
            return { message: "Ready Deck", statusCode: 201}

        } catch (error) {
            console.error("Erro ao buscar carta lendária:", error);
        }
    }
}

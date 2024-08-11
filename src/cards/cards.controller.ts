import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './card';

@Controller('cards')
export class CardsController {
    constructor(
      private readonly cardsService: CardsService 
    ){}

    @Get()
    async getAllCards(): Promise<Card[]>{
        return this.cardsService.getAllCards();
    }

    @Post()
    async create(@Body() card: Card): Promise<Card>{
        return this.cardsService.create(card);
    }

    @Get(':id')
    async getCardById(@Param('id') id: string): Promise<Card>{
        return this.cardsService.getCardById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() card: Card): Promise<Card>{
        return this.cardsService.update(id, card);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Card> {
        return this.cardsService.delete(id)
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './card';
import { Response } from 'express';

@Controller('cards')
export class CardsController {
    constructor(
      private readonly cardsService: CardsService 
    ){}

    @Get()
    async getAllCards(): Promise<Card[]>{
        return await this.cardsService.getAllCards();
    }

    @Post()
    async create(@Body() card: Card): Promise<Card>{
        return await this.cardsService.create(card);
    }

    @Get(':id')
    async getCardById(@Param('id') id: string): Promise<Card>{
        return await this.cardsService.getCardById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() card: Card): Promise<Card>{
        return await this.cardsService.update(id, card);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Card> {
        return await this.cardsService.delete(id)
    }

    @Post('/seedingDeck/:id')
    async createDeckByLegendary(@Param('id') id: string, @Res() res: Response): Promise<Response>{
        const result = await this.cardsService.createDeckByLegendary(id);
        return res.status(result.statusCode).send({ message: result.message});
    }
    
}

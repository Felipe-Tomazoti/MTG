import { Body, Controller, Delete, Get, Param, Post, Put, Res, Req, UseGuards } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './card';
import { Request, Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/authorization/roles.decorator';
import { Role } from 'src/authorization/enums/functions.enum';
import { BadRequestException } from '@nestjs/common';

@UseGuards(AuthGuard)
@Roles(Role.Admin)
@Controller('cards')
export class CardsController {
    constructor(
        private readonly cardsService: CardsService
    ) { }

    @Get('/myDecks')
async getUserDecks(@Req() req: Request) {
    try {
        const userKey = Object.keys(req).find(key => key === 'user');
        
        if (userKey) {
            const user = req[userKey]; // Acessando o valor do 'user'
            const userId = user?.sub; // Pegando o ID do usuário

            if (!userId) {
                throw new BadRequestException('User ID not found');
            }

            return this.cardsService.getDecksByUser(userId);
        } else {
            throw new BadRequestException('User not found in request');
        }
    } catch (error) {
        console.log("Error aqui: ", error);
    }
}

    @Get()
    async getAllCards(): Promise<Card[]> {
        try {
            return await this.cardsService.getAllCards();
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Post()
    async create(@Body() card: Card): Promise<Card> {
        try {
            return await this.cardsService.create(card);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Get(':id')
    async getCardById(@Param('id') id: string): Promise<Card> {
        try {
            return await this.cardsService.getCardById(id);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Get('/byName/:name')
    async getByName(@Param('name') name: string): Promise<Card[]> {
        try {
            return await this.cardsService.getByName(name);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() card: Card): Promise<Card> {
        try {
            return await this.cardsService.update(id, card);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Card> {
        try {
            return await this.cardsService.delete(id)
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Delete()
    async deleteAll(): Promise<void> {
        try {
            await this.cardsService.deleteAll()
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Roles(Role.User, Role.Admin)
    @Post('/importDeck')
    async importDeck(@Body() deck: any): Promise<string> {
        try {
            return await this.cardsService.importDeck(deck);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Roles(Role.User, Role.Admin)
    @Post('/seedingDeck/:id')
    async createDeckByLegendary(@Param('id') id: string, @Res() res: Response): Promise<Response> {
        try {
            const result = await this.cardsService.createDeckByLegendary(id);
            return res.status(result.statusCode).send({ message: result.message });
        } catch (err) {
            console.log("Error: " + err);
        }
    }
}

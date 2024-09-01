import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/auth/auth.decorator';
import { Roles } from 'src/authorization/roles.decorator';
import { Role } from 'src/authorization/enums/functions.enum';

@UseGuards(AuthGuard)
@Roles(Role.Admin)
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        try {
            return await this.usersService.getAllUsers();
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Public()
    @Post()
    async create(@Body() user: User): Promise<User> {
        try {
            return await this.usersService.create(user);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        try {
            return await this.usersService.getUserById(id);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        try {
            return await this.usersService.update(id, user);
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User> {
        try {
            return await this.usersService.delete(id)
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    @Delete()
    async deleteAll(): Promise<void> {
        try {
            await this.usersService.deleteAll()
        } catch (err) {
            console.log("Error: " + err);
        }
    }
}

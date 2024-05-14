import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Request, Res, UseGuards } from '@nestjs/common';
import { PacksService } from './packs.service';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('packs')
export class PacksController {

    constructor(
        private PacksService: PacksService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get('/')
    getUserPacks(@Request() req) {
        console.log(req.user)
        const userId = req.user.id;
        console.log(userId)
        return this.PacksService.getUserPacks(userId);
    }

    //packs/10
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getCardsByPackId(
        @Param('id') id: number,
    ) {
        return this.PacksService.getCardsByPackId(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    createPack(@Body() dto: CreatePackDto, @Res() res: any, @Request() req) {
        try {
            const userId = req.user.id;
            const newPack = this.PacksService.createPack(dto, userId);

            return res.status(HttpStatus.CREATED).json(newPack);
            // return res.status(201).json(newPack);

        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Ошибка при создании колоды', error: e })
        }
    }

    //добавить guards
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    updatePack(
        @Param('id') id: string,
        @Body() updatePackDto: UpdatePackDto
    ) {
        return this.PacksService.updatePack(+id, updatePackDto);
    }

    //packs/delete/10
    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    deletePack(@Param('id') id: string) {
        return this.PacksService.deletePacks(+id);
    }
}

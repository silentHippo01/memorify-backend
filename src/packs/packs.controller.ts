import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { PacksService } from './packs.service';
import { CreatePackDto } from './dto/create-pack.dto';

@Controller('packs')
export class PacksController {

    constructor(

        private PacksService: PacksService
    ) { }

    @Get('/')
    getPacks() {
        return this.PacksService.getAllPacks();
    }

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    createPack(@Body() dto: CreatePackDto, @Res() res: any) {
        try {
            const newPack = this.PacksService.createPack(dto);

            return res.status(HttpStatus.CREATED).json(newPack);
            // return res.status(201).json(newPack);

        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Ошибка при создании колоды', error: e })
        }
    }
}

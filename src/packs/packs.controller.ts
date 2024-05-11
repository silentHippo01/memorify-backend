import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { PacksService } from './packs.service';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';

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

    //добавить guards
    @Patch('update/:id')
    updatePack(
        @Param('id') id: string,
        @Body() updatePackDto: UpdatePackDto
    ) {
        return this.PacksService.updatePack(+id, updatePackDto);
    }

    //packs/delete/10
    @Delete('delete/:id')
    deletePack(@Param('id') id: string) {
        return this.PacksService.deletePacks(+id);
    }
}

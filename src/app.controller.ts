import { AppService } from './app.service';
import { Controller, Get } from "@nestjs/common";

//контроллер должен оставаться максимально тонким. лишь принимать запрос и отправлять ответ
// всю логику выносим в сервисы 

@Controller('/api')
export class AppController {

    constructor(private AppService: AppService) { }

}
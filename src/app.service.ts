import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {
    getUsers() {
        return [{ name: 'Frank', age: 25 }]
    }
}
import { HttpException, HttpStatus } from "@nestjs/common";

//нужно для кастомный ошибок 

export class ValidationException extends HttpException {
    messages;
    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST);
        this.message = response;
    }
}
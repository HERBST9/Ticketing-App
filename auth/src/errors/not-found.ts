import { CustomError } from "./custom-error";

export class NotFound extends CustomError {
    statusCode = 404
    constructor(public message: string) {
        super('Route not found')
        Object.setPrototypeOf(this, NotFound.prototype)

    }

    serializeErrors() {
         return [{ message: 'Not Found'}]
        
    }
}
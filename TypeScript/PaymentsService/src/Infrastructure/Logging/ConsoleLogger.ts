import { injectable } from "tsyringe";
import { IBaseLogger } from "../../Domain/Logging/IBaseLogger";

@injectable()
export class ConsoleLogger implements IBaseLogger {
    log(message: String): void;
    log(object: any): void;
    log(message: String, object: any): void;
    log(message: unknown, object?: unknown): void {
        if(message) {
            console.log(message)
        }
        if(object) {
            console.log(JSON.stringify(object))
        }
    }

}
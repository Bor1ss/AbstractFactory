export interface IBaseLogger {
    log(message: String): void;
    log(object: any): void;
    log(message: String, object: any): void;    
}
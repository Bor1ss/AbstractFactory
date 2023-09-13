import { inject } from "tsyringe";
import { IBaseLogger } from "../Logging/IBaseLogger";
import { IStatisticsService } from "../Statistics/IStatisticsService";
import { IPaymentAbstractFactory } from "./IPaymentAbstractFactory";
import { PaymentProcessor } from "./PaymentProcessor";


export class PaymentProcessorFactory {
    constructor(
        @inject('StatisticsService') private statisticsService: IStatisticsService,
        @inject('Logger') private logger: IBaseLogger) { }

    public getPaymentProcessor<T extends IPaymentAbstractFactory>(type: (new () => T)): PaymentProcessor {
        return new PaymentProcessor(new type(), this.statisticsService, this.logger);
    }
}
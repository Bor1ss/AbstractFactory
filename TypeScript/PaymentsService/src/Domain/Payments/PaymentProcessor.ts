import { IBaseLogger } from "../Logging/IBaseLogger";
import { IStatisticsService } from "../Statistics/IStatisticsService";
import { IPaymentAbstractFactory } from "./IPaymentAbstractFactory";
import { ProcessPaymentBaseRequest } from "./ProcessPaymentBaseRequest";
import { ProcessPaymentBaseResponse } from "./ProcessPaymentBaseResponse";


export class PaymentProcessor {
    constructor(private factory: IPaymentAbstractFactory,
        private statisticsService: IStatisticsService,
        private logger: IBaseLogger) { }

    processPayment(request: ProcessPaymentBaseRequest): ProcessPaymentBaseResponse {
        this.logger.log("Processing request", request);

        const validator = this.factory.getProcessPaymentRequestValidator();

        const validationResult = validator.validateRequest(request);

        if(!validationResult.isValid)
        {
            this.logger.log("Validation failed");
            return this.factory.getValidationFailedResponse(validationResult);
        }

        const client = this.factory.getPaymentClient();

        const paymentResult: ProcessPaymentBaseResponse = client.processPayment(request);

        this.statisticsService.countStatistics(request, paymentResult);

        this.logger.log("Processing request finished with result", paymentResult);

        return paymentResult;
    }
}
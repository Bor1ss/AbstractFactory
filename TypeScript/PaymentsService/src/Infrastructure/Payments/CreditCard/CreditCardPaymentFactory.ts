import { IPaymentAbstractFactory } from "../../../Domain/Payments/IPaymentAbstractFactory";
import { IPaymentClient } from "../../../Domain/Payments/IPaymentClient";
import { IProcessPaymentRequestValidator } from "../../../Domain/Payments/IProcessPaymentRequestValidator";
import { ProcessPaymentBaseResponse } from "../../../Domain/Payments/ProcessPaymentBaseResponse";
import { RequestValidationResult } from "../../../Domain/Payments/RequestValidationResult";
import { CreditCardPaymentClient } from "./CreditCardPaymentClient";
import { CreditCardProcessPaymentRequestValidator } from "./CreditCardProcessPaymentRequestValidator";
import { ProcessCreditCardPaymentResponse } from "./ProcessCreditCardPaymentResponse";

export class CreditCardPaymentFactory implements IPaymentAbstractFactory {
    getPaymentClient(): IPaymentClient {
        return new CreditCardPaymentClient();
    }

    getProcessPaymentRequestValidator(): IProcessPaymentRequestValidator {
        return CreditCardProcessPaymentRequestValidator.Instance;
    }

    getValidationFailedResponse(result: RequestValidationResult): ProcessPaymentBaseResponse {
        const resp: ProcessCreditCardPaymentResponse = new ProcessCreditCardPaymentResponse();
        resp.status = 'ValidationFailed';
        resp.error = result.error;

        return resp;
    }
}
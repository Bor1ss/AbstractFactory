import { IPaymentAbstractFactory } from "../../../Domain/Payments/IPaymentAbstractFactory";
import { IPaymentClient } from "../../../Domain/Payments/IPaymentClient";
import { IProcessPaymentRequestValidator } from "../../../Domain/Payments/IProcessPaymentRequestValidator";
import { ProcessPaymentBaseResponse } from "../../../Domain/Payments/ProcessPaymentBaseResponse";
import { RequestValidationResult } from "../../../Domain/Payments/RequestValidationResult";
import { GooglePayPaymentClient } from "./GooglePayPaymentClient";
import { GooglePayProcessPaymentRequestValidator } from "./GooglePayProcessPaymentRequestValidator";
import { ProcessGooglePayPaymentResponse } from "./ProcessGooglePayPaymentResponse";

export class GooglePayPaymentFactory implements IPaymentAbstractFactory {
    getPaymentClient(): IPaymentClient {
        return new GooglePayPaymentClient();
    }

    getProcessPaymentRequestValidator(): IProcessPaymentRequestValidator {
        return GooglePayProcessPaymentRequestValidator.Instance;
    }

    getValidationFailedResponse(result: RequestValidationResult): ProcessPaymentBaseResponse {
        const resp: ProcessGooglePayPaymentResponse = new ProcessGooglePayPaymentResponse();
        resp.status = 'ValidationFailed';
        resp.error = result.error;

        return resp;
    }
}
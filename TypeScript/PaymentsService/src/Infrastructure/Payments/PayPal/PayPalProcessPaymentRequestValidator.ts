import { IProcessPaymentRequestValidator } from "../../../Domain/Payments/IProcessPaymentRequestValidator";
import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";
import { RequestValidationResult } from "../../../Domain/Payments/RequestValidationResult";
import { ProcessPayPalPaymentRequest } from "./ProcessPayPalPaymentRequest";

export class PayPalProcessPaymentRequestValidator implements IProcessPaymentRequestValidator {
    private constructor() { }

    private static instance: PayPalProcessPaymentRequestValidator;

    public static get Instance(): PayPalProcessPaymentRequestValidator {
        if(!this.instance) {
            this.instance = new PayPalProcessPaymentRequestValidator()
        }

        return this.instance;
    }

    public validateRequest(request: ProcessPaymentBaseRequest): RequestValidationResult {
        const req = request as ProcessPayPalPaymentRequest;

        if(!req) {
            return new RequestValidationResult(false, "BadRequest");
        }

        if (!req.token) {
            return new RequestValidationResult(false, 'BadToken');
        }

        return new RequestValidationResult(true);
    }
}
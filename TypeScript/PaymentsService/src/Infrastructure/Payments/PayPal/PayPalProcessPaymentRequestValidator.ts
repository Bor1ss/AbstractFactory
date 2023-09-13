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
        if (!(request instanceof ProcessPayPalPaymentRequest)) {
            return new RequestValidationResult(false, 'BadRequest');
        }

        if (!request.token) {
            return new RequestValidationResult(false, 'BadToken');
        }

        return new RequestValidationResult(true);
    }
}






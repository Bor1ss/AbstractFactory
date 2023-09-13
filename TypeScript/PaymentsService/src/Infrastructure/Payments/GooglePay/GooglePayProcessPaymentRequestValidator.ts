import { IProcessPaymentRequestValidator } from "../../../Domain/Payments/IProcessPaymentRequestValidator";
import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";
import { RequestValidationResult } from "../../../Domain/Payments/RequestValidationResult";
import { ProcessGooglePayPaymentRequest } from "./ProcessGooglePayPaymentRequest";

export class GooglePayProcessPaymentRequestValidator implements IProcessPaymentRequestValidator {
    private constructor() { }

    private static instance: GooglePayProcessPaymentRequestValidator;

    public static get Instance(): GooglePayProcessPaymentRequestValidator {
        if(!this.instance) {
            this.instance = new GooglePayProcessPaymentRequestValidator();
        }

        return this.instance;
    }

    public validateRequest(request: ProcessPaymentBaseRequest): RequestValidationResult {
        const req = request as ProcessGooglePayPaymentRequest;

        if(!req) {
            return new RequestValidationResult(false, "BadRequest");
        }

        if (!req.email || req.email.trim() === "") {
            return new RequestValidationResult(false, "BadEmail");
        }

        if (!req.token || req.token.trim() === "") {
            return new RequestValidationResult(false, "BadToken");
        }

        return new RequestValidationResult(true);
    }
}
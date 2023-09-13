import { IProcessPaymentRequestValidator } from "../../../Domain/Payments/IProcessPaymentRequestValidator";
import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";
import { RequestValidationResult } from "../../../Domain/Payments/RequestValidationResult";
import { ProcessCreditCardPaymentRequest } from "./ProcessCreditCardPaymentRequest";

export class CreditCardProcessPaymentRequestValidator implements IProcessPaymentRequestValidator {
    private constructor() { }

    private static instance: CreditCardProcessPaymentRequestValidator;

    public static get Instance(): CreditCardProcessPaymentRequestValidator {
        if(!this.instance){
            this.instance = new CreditCardProcessPaymentRequestValidator();
        }
        
        return this.instance;
    }

    public validateRequest(request: ProcessPaymentBaseRequest): RequestValidationResult {
        if (!(request instanceof ProcessCreditCardPaymentRequest)) {
            return new RequestValidationResult(false, "BadRequest");
        }

        const req = request as ProcessCreditCardPaymentRequest;

        if (!req.cardInfo) {
            return new RequestValidationResult(false, "BadRequest");
        }

        const errors: string[] = [];

        if (!req.cardInfo.firstName || req.cardInfo.firstName.trim() === "") {
            errors.push("BadFirstName");
        }

        if (!req.cardInfo.lastName || req.cardInfo.lastName.trim() === "") {
            errors.push("BadLastName");
        }

        if (!req.cardInfo.type || req.cardInfo.type.trim() === "") {
            errors.push("BadType");
        }

        if (!req.cardInfo.number || req.cardInfo.number.length < 12) {
            errors.push("BadNumber");
        }

        if (req.cardInfo.cvv < 100 || req.cardInfo.cvv > 1000) {
            errors.push("BadCVV");
        }

        if (req.cardInfo.expYear < new Date().getUTCFullYear()) {
            errors.push("BadExp");
        } else if (
            req.cardInfo.expYear === new Date().getUTCFullYear() &&
            req.cardInfo.expMonth < new Date().getUTCMonth() + 1
        ) {
            errors.push("BadExp");
        }

        if (errors.length > 0) {
            return new RequestValidationResult(false, errors.join(", "));
        }

        return new RequestValidationResult(true);
    }
}
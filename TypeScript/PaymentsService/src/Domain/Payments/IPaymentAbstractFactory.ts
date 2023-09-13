import { IPaymentClient } from "./IPaymentClient";
import { IProcessPaymentRequestValidator } from "./IProcessPaymentRequestValidator";
import { ProcessPaymentBaseResponse } from "./ProcessPaymentBaseResponse";
import { RequestValidationResult } from "./RequestValidationResult";


export interface IPaymentAbstractFactory {
    getPaymentClient(): IPaymentClient;
    getProcessPaymentRequestValidator(): IProcessPaymentRequestValidator;
    getValidationFailedResponse(result: RequestValidationResult): ProcessPaymentBaseResponse;
}
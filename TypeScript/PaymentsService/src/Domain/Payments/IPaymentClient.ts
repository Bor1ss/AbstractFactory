import { ProcessPaymentBaseResponse } from "./ProcessPaymentBaseResponse";
import { ProcessPaymentBaseRequest } from "./ProcessPaymentBaseRequest";

export interface IPaymentClient {
    processPayment(request: ProcessPaymentBaseRequest): ProcessPaymentBaseResponse;
}
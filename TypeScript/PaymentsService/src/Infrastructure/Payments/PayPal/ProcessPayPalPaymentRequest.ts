import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";

export interface ProcessPayPalPaymentRequest extends ProcessPaymentBaseRequest {
    token?: string;
}
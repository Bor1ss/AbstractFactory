import { ProcessPaymentBaseResponse } from "../../../Domain/Payments/ProcessPaymentBaseResponse";

export class ProcessPayPalPaymentResponse extends ProcessPaymentBaseResponse {
    constructor() {
        super('PayPal');
    }

    public transactionId?: string;
    public email?: string;
}
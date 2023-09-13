import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";

export class ProcessPayPalPaymentRequest extends ProcessPaymentBaseRequest {
    constructor() {
        super('PayPal');
    }

    public token?: string;
}
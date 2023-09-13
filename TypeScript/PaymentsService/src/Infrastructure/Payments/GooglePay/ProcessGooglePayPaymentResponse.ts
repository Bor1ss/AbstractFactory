import { ProcessPaymentBaseResponse } from "../../../Domain/Payments/ProcessPaymentBaseResponse";

export class ProcessGooglePayPaymentResponse extends ProcessPaymentBaseResponse {
    constructor() {
      super('GooglePay');
    }
  
    public transactionId?: string;
    public email?: string;
  }
import { ProcessPaymentBaseResponse } from "../../../Domain/Payments/ProcessPaymentBaseResponse";

export class ProcessCreditCardPaymentResponse extends ProcessPaymentBaseResponse {
    constructor() {
      super('CreditCard');
    }
  
    public transactionId?: string;
    public receiptId?: string;
  }
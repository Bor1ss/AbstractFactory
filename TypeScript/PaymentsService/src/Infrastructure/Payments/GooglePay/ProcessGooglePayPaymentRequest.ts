import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";

export class ProcessGooglePayPaymentRequest extends ProcessPaymentBaseRequest {
    constructor() {
      super('GooglePay');
    }
  
    public email?: string;
    public token?: string;
  }
import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";
import { CreditCardInfo } from "./CreditCardInfo";

export class ProcessCreditCardPaymentRequest extends ProcessPaymentBaseRequest {
    public cardInfo: CreditCardInfo | null| undefined = undefined;
  
    constructor() {
      super('CreditCard');
    }
  }
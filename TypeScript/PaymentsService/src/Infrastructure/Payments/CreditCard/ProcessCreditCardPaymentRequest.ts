import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";
import { CreditCardInfo } from "./CreditCardInfo";

export interface ProcessCreditCardPaymentRequest extends ProcessPaymentBaseRequest {
    cardInfo: CreditCardInfo | null| undefined;
  }
import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";

export interface ProcessGooglePayPaymentRequest extends ProcessPaymentBaseRequest {
    email?: string;
    token?: string;
  }
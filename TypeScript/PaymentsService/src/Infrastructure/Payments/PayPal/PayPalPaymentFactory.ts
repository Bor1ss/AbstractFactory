import { IPaymentAbstractFactory } from "../../../Domain/Payments/IPaymentAbstractFactory";
import { IPaymentClient } from "../../../Domain/Payments/IPaymentClient";
import { IProcessPaymentRequestValidator } from "../../../Domain/Payments/IProcessPaymentRequestValidator";
import { RequestValidationResult } from "../../../Domain/Payments/RequestValidationResult";
import { PayPalPaymentClient } from "./PayPalPaymentClient";
import { PayPalProcessPaymentRequestValidator } from "./PayPalProcessPaymentRequestValidator";
import { ProcessPayPalPaymentResponse } from "./ProcessPayPalPaymentResponse";

export class PayPalPaymentFactory implements IPaymentAbstractFactory {
    getPaymentClient(): IPaymentClient {
      return new PayPalPaymentClient();
    }
  
    getProcessPaymentRequestValidator(): IProcessPaymentRequestValidator {
      return PayPalProcessPaymentRequestValidator.Instance;
    }
  
    getValidationFailedResponse(result: RequestValidationResult): ProcessPayPalPaymentResponse {
      const resp: ProcessPayPalPaymentResponse = new ProcessPayPalPaymentResponse();
      resp.status = 'ValidationFailed';
      resp.error = result.error;

      return resp;
    }
  }
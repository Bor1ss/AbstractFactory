import * as uuid from 'uuid';
import { IPaymentClient } from '../../../Domain/Payments/IPaymentClient';
import { ProcessPaymentBaseRequest } from '../../../Domain/Payments/ProcessPaymentBaseRequest';
import { ProcessPayPalPaymentRequest } from './ProcessPayPalPaymentRequest';
import { ProcessPayPalPaymentResponse } from './ProcessPayPalPaymentResponse';

export class PayPalPaymentClient implements IPaymentClient {
  processPayment(request: ProcessPaymentBaseRequest): ProcessPayPalPaymentResponse {
    const req = request as ProcessPayPalPaymentRequest;

    if (!this.validateRequest(req)) {
      throw new Error('Invalid request');
    }

    const resp: ProcessPayPalPaymentResponse = new ProcessPayPalPaymentResponse();
    resp.email =`${req.token}@paypal.com`;
    resp.transactionId = uuid.v4();

    if (req.token === 'fail') {
      resp.status = 'Failed';
      resp.error = 'Generic error';
    } else {
      resp.status = 'Success';
    }

    return resp;
  }

  private validateRequest(request: ProcessPayPalPaymentRequest): boolean {
    if (!request) {
      return false;
    }

    if (!request.token) {
      return false;
    }

    return true;
  }
}
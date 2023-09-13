import * as uuid from 'uuid';
import { IPaymentClient } from "../../../Domain/Payments/IPaymentClient";
import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";
import { ProcessPaymentBaseResponse } from "../../../Domain/Payments/ProcessPaymentBaseResponse";
import { ProcessCreditCardPaymentRequest } from "./ProcessCreditCardPaymentRequest";
import { ProcessCreditCardPaymentResponse } from "./ProcessCreditCardPaymentResponse";

export class CreditCardPaymentClient implements IPaymentClient {
    processPayment(request: ProcessPaymentBaseRequest): ProcessPaymentBaseResponse {
        const req = request as ProcessCreditCardPaymentRequest;

        if (!req) {
            throw new Error("Invalid argument");
        }

        const resp: ProcessCreditCardPaymentResponse = new ProcessCreditCardPaymentResponse();
        resp.receiptId = `Receipt ${new Date().toISOString().slice(0, 10)}`;
        resp.transactionId = uuid.v4();

        if (req.cardInfo?.type === "fail") {
            resp.status = "Failed";
            resp.error = "Generic error";
        } else {
            resp.status = "Success";
        }

        return resp;
    }
}
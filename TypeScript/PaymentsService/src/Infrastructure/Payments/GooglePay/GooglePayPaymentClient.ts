import * as uuid from 'uuid';
import { IPaymentClient } from "../../../Domain/Payments/IPaymentClient";
import { ProcessPaymentBaseRequest } from "../../../Domain/Payments/ProcessPaymentBaseRequest";
import { ProcessPaymentBaseResponse } from "../../../Domain/Payments/ProcessPaymentBaseResponse";
import { ProcessGooglePayPaymentRequest } from "./ProcessGooglePayPaymentRequest";
import { ProcessGooglePayPaymentResponse } from "./ProcessGooglePayPaymentResponse";

export class GooglePayPaymentClient implements IPaymentClient {
    processPayment(request: ProcessPaymentBaseRequest): ProcessPaymentBaseResponse {
        const req = request as ProcessGooglePayPaymentRequest;

        if (!req) {
            throw new Error("Invalid argument");
        }

        const resp: ProcessGooglePayPaymentResponse = new ProcessGooglePayPaymentResponse();
        resp.email = req.email;
        resp.transactionId = uuid.v4();

        if (req.token === "fail") {
            resp.status = "Failed";
            resp.error = "Generic error";
        } else {
            resp.status = "Success";
        }

        return resp;
    }
}
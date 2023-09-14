import uuid

from Domain.Payments.IPaymentClient import IPaymentClient
from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest
from Infrastructure.Payments.GooglePay.ProcessGooglePayPaymentRequest import ProcessGooglePayPaymentRequest
from Infrastructure.Payments.GooglePay.ProcessGooglePayPaymentResponse import ProcessGooglePayPaymentResponse

class GooglePayPaymentClient(IPaymentClient):
    def process_payment(self, request: ProcessPaymentBaseRequest) -> ProcessGooglePayPaymentResponse:
        if not isinstance(request, ProcessGooglePayPaymentRequest):
            raise ValueError("Invalid request type")

        resp = ProcessGooglePayPaymentResponse()
        resp.email = request.email
        resp.transactionId = str(uuid.uuid4())

        if request.token == "fail":
            resp.status = "Failed"
            resp.error = "Generic error"
        else:
            resp.status = "Success"

        return resp
import uuid

from Domain.Payments.IPaymentClient import IPaymentClient
from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest
from Infrastructure.Payments.PayPal.ProcessPayPalPaymentRequest import ProcessPayPalPaymentRequest
from Infrastructure.Payments.PayPal.ProcessPayPalPaymentResponse import ProcessPayPalPaymentResponse

class PayPalPaymentClient(IPaymentClient):
    def process_payment(self, request: ProcessPaymentBaseRequest) -> ProcessPayPalPaymentResponse:
        if not isinstance(request, ProcessPayPalPaymentRequest):
            raise ValueError("Invalid request type")

        resp = ProcessPayPalPaymentResponse()
        resp.email = f"{request.token}@paypal.com"
        resp.transactionId = str(uuid.uuid4())

        if request.token == "fail":
            resp.status = "Failed"
            resp.error = "Generic error"
        else:
            resp.status = "Success"

        return resp
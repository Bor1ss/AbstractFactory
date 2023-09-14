from datetime import datetime
import uuid

from Domain.Payments.IPaymentClient import IPaymentClient
from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest
from Infrastructure.Payments.CreditCard.ProcessCreditCardPaymentRequest import ProcessCreditCardPaymentRequest
from Infrastructure.Payments.CreditCard.ProcessCreditCardPaymentResponse import ProcessCreditCardPaymentResponse

class CreditCardPaymentClient(IPaymentClient):
    def process_payment(self, request: ProcessPaymentBaseRequest) -> ProcessCreditCardPaymentResponse:
        if not isinstance(request, ProcessCreditCardPaymentRequest):
            raise ValueError("Invalid request type")

        resp = ProcessCreditCardPaymentResponse()
        resp.receiptId = f"Receipt {datetime.utcnow():%Y-%m-%d}"
        resp.transactionId = str(uuid.uuid4())

        if request.cardInfo.type == "fail":
            resp.status = "Failed"
            resp.error = "Generic error"
        else:
            resp.status = "Success"

        return resp
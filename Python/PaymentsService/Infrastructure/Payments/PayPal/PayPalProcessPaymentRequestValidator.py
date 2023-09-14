from Domain.Payments.IProcessPaymentRequestValidator import IProcessPaymentRequestValidator
from Domain.Payments.RequestValidationResult import RequestValidationResult
from Infrastructure.Payments.PayPal.ProcessPayPalPaymentRequest import ProcessPayPalPaymentRequest


class PayPalProcessPaymentRequestValidator(IProcessPaymentRequestValidator):
    def __init__(self):
        pass

    def validate_request(self, request):
        if not isinstance(request, ProcessPayPalPaymentRequest):
            return RequestValidationResult(False, "BadRequest")

        if not request.token:
            return RequestValidationResult(False, "BadToken")

        return RequestValidationResult(True)
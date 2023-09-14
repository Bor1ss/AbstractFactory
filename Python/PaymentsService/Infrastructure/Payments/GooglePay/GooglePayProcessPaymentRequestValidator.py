from Domain.Payments.IProcessPaymentRequestValidator import IProcessPaymentRequestValidator
from Domain.Payments.RequestValidationResult import RequestValidationResult
from Infrastructure.Payments.GooglePay.ProcessGooglePayPaymentRequest import ProcessGooglePayPaymentRequest


class GooglePayProcessPaymentRequestValidator(IProcessPaymentRequestValidator):
    def __init__(self):
        pass

    def validate_request(self, request):
        if not isinstance(request, ProcessGooglePayPaymentRequest):
            return RequestValidationResult(False, "BadRequest")

        if not request.email:
            return RequestValidationResult(False, "BadEmail")

        if not request.token:
            return RequestValidationResult(False, "BadToken")

        return RequestValidationResult(True)
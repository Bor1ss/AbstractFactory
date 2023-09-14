from Domain.Payments.IPaymentAbstractFactory import IPaymentAbstractFactory
from Domain.Payments.IPaymentClient import IPaymentClient
from Domain.Payments.IProcessPaymentRequestValidator import IProcessPaymentRequestValidator
from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse
from Infrastructure.Payments.GooglePay.GooglePayPaymentClient import GooglePayPaymentClient
from Infrastructure.Payments.GooglePay.GooglePayProcessPaymentRequestValidator import GooglePayProcessPaymentRequestValidator
from Infrastructure.Payments.GooglePay.ProcessGooglePayPaymentResponse import ProcessGooglePayPaymentResponse


class GooglePayPaymentFactory(IPaymentAbstractFactory):
    def get_payment_client(self) -> IPaymentClient:
        return GooglePayPaymentClient()

    def get_process_payment_request_validator(self) -> IProcessPaymentRequestValidator:
        return GooglePayProcessPaymentRequestValidator()

    def get_validation_failed_response(self, result) -> ProcessPaymentBaseResponse:
        return ProcessGooglePayPaymentResponse(status="ValidationFailed", error=result.error)
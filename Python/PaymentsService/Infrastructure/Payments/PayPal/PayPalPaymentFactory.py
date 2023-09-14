from Domain.Payments.IPaymentAbstractFactory import IPaymentAbstractFactory
from Domain.Payments.IPaymentClient import IPaymentClient
from Domain.Payments.IProcessPaymentRequestValidator import IProcessPaymentRequestValidator
from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse
from Infrastructure.Payments.PayPal.PayPalPaymentClient import PayPalPaymentClient
from Infrastructure.Payments.PayPal.PayPalProcessPaymentRequestValidator import PayPalProcessPaymentRequestValidator
from Infrastructure.Payments.PayPal.ProcessPayPalPaymentResponse import ProcessPayPalPaymentResponse


class PayPalPaymentFactory(IPaymentAbstractFactory):
    def get_payment_client(self) -> IPaymentClient:
        return PayPalPaymentClient()

    def get_process_payment_request_validator(self) -> IProcessPaymentRequestValidator:
        return PayPalProcessPaymentRequestValidator()

    def get_validation_failed_response(self, result) -> ProcessPaymentBaseResponse:
        return ProcessPayPalPaymentResponse(status="ValidationFailed", error=result.error)
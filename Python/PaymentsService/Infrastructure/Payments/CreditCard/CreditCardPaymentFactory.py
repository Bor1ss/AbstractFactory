from Domain.Payments.IPaymentAbstractFactory import IPaymentAbstractFactory
from Domain.Payments.IPaymentClient import IPaymentClient
from Domain.Payments.IProcessPaymentRequestValidator import IProcessPaymentRequestValidator
from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse
from Infrastructure.Payments.CreditCard.CreditCardPaymentClient import CreditCardPaymentClient
from Infrastructure.Payments.CreditCard.CreditCardProcessPaymentRequestValidator import CreditCardProcessPaymentRequestValidator
from Infrastructure.Payments.CreditCard.ProcessCreditCardPaymentResponse import ProcessCreditCardPaymentResponse


class CreditCardPaymentFactory(IPaymentAbstractFactory):
    def get_payment_client(self) -> IPaymentClient:
        return CreditCardPaymentClient()

    def get_process_payment_request_validator(self) -> IProcessPaymentRequestValidator:
        return CreditCardProcessPaymentRequestValidator()

    def get_validation_failed_response(self, result) -> ProcessPaymentBaseResponse:
        return ProcessCreditCardPaymentResponse(status="ValidationFailed", error=result.error)
from abc import ABC, abstractmethod

from Domain.Payments.IPaymentClient import IPaymentClient
from Domain.Payments.IProcessPaymentRequestValidator import IProcessPaymentRequestValidator
from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse
from Domain.Payments.RequestValidationResult import RequestValidationResult

class IPaymentAbstractFactory(ABC):
    @abstractmethod
    def get_payment_client(self) -> IPaymentClient:
        pass

    @abstractmethod
    def get_process_payment_request_validator(self) -> IProcessPaymentRequestValidator:
        pass

    @abstractmethod
    def get_validation_failed_response(self, result: RequestValidationResult) -> ProcessPaymentBaseResponse:
        pass

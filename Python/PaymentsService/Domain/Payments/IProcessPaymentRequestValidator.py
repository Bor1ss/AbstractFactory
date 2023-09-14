from abc import ABC, abstractmethod

from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest
from Domain.Payments.RequestValidationResult import RequestValidationResult

class IProcessPaymentRequestValidator(ABC):
    @abstractmethod
    def validate_request(self, request: ProcessPaymentBaseRequest) -> RequestValidationResult:
        pass
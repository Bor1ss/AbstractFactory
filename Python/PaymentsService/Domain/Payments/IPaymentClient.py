from abc import ABC, abstractmethod

from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest
from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse

class IPaymentClient(ABC):
    @abstractmethod
    def process_payment(self, request: ProcessPaymentBaseRequest) -> ProcessPaymentBaseResponse:
        pass
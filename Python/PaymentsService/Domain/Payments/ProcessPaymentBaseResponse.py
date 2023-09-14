from abc import ABC, abstractmethod

class ProcessPaymentBaseResponse(ABC):
    def __init__(self, payment_method, status = None, error = None):
        self.paymentMethod = payment_method
        self.status = status
        self.error = error
    
    @abstractmethod
    def to_dict(self) -> dict:
        pass
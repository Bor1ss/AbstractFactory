from abc import ABC, abstractmethod

class ProcessPaymentBaseRequest(ABC):
    def __init__(self, payment_method, currency = None, amount = None):
        self.paymentMethod = payment_method
        self.currency = currency
        self.amount = amount
    
    @abstractmethod
    def to_dict(self) -> dict:
        pass
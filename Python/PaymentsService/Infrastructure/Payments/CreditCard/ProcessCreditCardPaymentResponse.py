from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse


class ProcessCreditCardPaymentResponse(ProcessPaymentBaseResponse):
    def __init__(self, transactionId = None, receiptId = None, status = None, error = None):
        super().__init__("CreditCard", status, error)
        self.transactionId = transactionId
        self.receiptId = receiptId

    def to_dict(self):
        return {
            "paymentMethod": self.paymentMethod,
            "status": self.status,
            "error": self.error,
            "transactionId": self.transactionId,
            "receiptId": self.receiptId
        }
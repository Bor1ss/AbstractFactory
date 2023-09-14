from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse


class ProcessGooglePayPaymentResponse(ProcessPaymentBaseResponse):
    def __init__(self, transactionId = None, email = None, status = None, error = None):
        super().__init__("GooglePay", status, error)
        self.transactionId = transactionId
        self.email = email

    def to_dict(self):
        return {
            "paymentMethod": self.paymentMethod,
            "status": self.status,
            "error": self.error,
            "transactionId": self.transactionId,
            "email": self.email
        }



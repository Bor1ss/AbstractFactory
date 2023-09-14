from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest


class ProcessPayPalPaymentRequest(ProcessPaymentBaseRequest):
    def __init__(self, token = None, currency = None, amount = 0):
        super().__init__("PayPal", currency, amount)
        self.token = token

    def to_dict(self):
        return {
            "paymentMethod": self.paymentMethod,
            "currency": self.currency,
            "amount": self.amount,
            "token": self.token
        }
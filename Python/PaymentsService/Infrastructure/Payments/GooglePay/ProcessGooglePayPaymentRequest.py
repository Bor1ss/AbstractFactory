from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest


class ProcessGooglePayPaymentRequest(ProcessPaymentBaseRequest):
    def __init__(self, email = None, token = None, currency = None, amount = 0):
        super().__init__("GooglePay", currency, amount)
        self.email = email
        self.token = token

    def to_dict(self):
        return {
            "paymentMethod": self.paymentMethod,
            "currency": self.currency,
            "amount": self.amount,
            "token": self.token,
            "email": self.email
        }
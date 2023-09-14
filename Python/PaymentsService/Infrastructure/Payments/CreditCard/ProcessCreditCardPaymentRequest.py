from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest
from Infrastructure.Payments.CreditCard.CreditCardInfo import CreditCardInfo


class ProcessCreditCardPaymentRequest(ProcessPaymentBaseRequest):
    def __init__(self):
        super().__init__("CreditCard", None, 0)
        self.cardInfo = CreditCardInfo(None, None, None, None, 0, 0, 0)

    def __init__(self, cardInfo: CreditCardInfo, currency, amount):
        super().__init__("CreditCard", currency, amount)
        self.cardInfo = CreditCardInfo(**cardInfo)

    def to_dict(self):
        return {
            "paymentMethod": self.paymentMethod,
            "currency": self.currency,
            "amount": self.amount,
            "cardInfo": self.cardInfo.to_dict()
        }
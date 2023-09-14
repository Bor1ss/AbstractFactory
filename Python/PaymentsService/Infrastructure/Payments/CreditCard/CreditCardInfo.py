class CreditCardInfo:
    def __init__(self, firstName = None, lastName = None, number = None, type = None, cvv = 0, expYear = 0, expMonth = 0):
        self.firstName = firstName
        self.lastName = lastName
        self.number = number
        self.type = type
        self.cvv = cvv
        self.expYear = expYear
        self.expMonth = expMonth

    def to_dict(self):
        return {
            "firstName": self.firstName,
            "lastName": self.lastName,
            "number": self.number,
            "type": self.type,
            "cvv": self.cvv,
            "expYear": self.expYear,
            "expMonth": self.expMonth
        }
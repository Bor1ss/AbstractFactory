from datetime import datetime

from Domain.Payments.IProcessPaymentRequestValidator import IProcessPaymentRequestValidator
from Domain.Payments.RequestValidationResult import RequestValidationResult
from Infrastructure.Payments.CreditCard.ProcessCreditCardPaymentRequest import ProcessCreditCardPaymentRequest

class CreditCardProcessPaymentRequestValidator(IProcessPaymentRequestValidator):
    def __init__(self):
        pass

    def validate_request(self, request):
        if not isinstance(request, ProcessCreditCardPaymentRequest) or request.cardInfo is None:
            return RequestValidationResult(False, "BadRequest")

        errors = []

        if not request.cardInfo.firstName:
            errors.append("BadFirstName")

        if not request.cardInfo.lastName:
            errors.append("BadLastName")

        if not request.cardInfo.type:
            errors.append("BadType")

        if not request.cardInfo.number or len(request.cardInfo.number) < 12:
            errors.append("BadNumber")

        if request.cardInfo.cvv < 100 or request.cardInfo.cvv > 1000:
            errors.append("BadCVV")

        current_year = datetime.utcnow().year

        if request.cardInfo.expYear < current_year:
            errors.append("BadExp")
        elif request.cardInfo.expYear == current_year and request.cardInfo.expMonth < datetime.utcnow().month:
            errors.append("BadExp")

        if errors:
            return RequestValidationResult(False, ", ".join(errors))

        return RequestValidationResult(True)
using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.CreditCard;
public sealed class CreditCardPaymentFactory : IPaymentAbstractFactory
{
    public IPaymentClient GetPaymentClient()
    {
        return new CreditCardPaymentClient();
    }

    public IProcessPaymentRequestValidator GetProcessPaymentRequestValidator()
    {
        return CreditCardProcessPaymentRequestValidator.Instance;
    }

    public ProcessPaymentBaseResponse GetValidationFailedResponse(RequestValidationResult result)
    {
        return new ProcessCreditCardPaymentResponse()
        {
            Status = "ValidationFailed",
            Error = result.Error
        };
    }
}

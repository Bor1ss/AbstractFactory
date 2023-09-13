using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.PayPal;

public sealed class PayPalPaymentFactory : IPaymentAbstractFactory
{
    public IPaymentClient GetPaymentClient()
    {
        return new PayPalPaymentClient();
    }

    public IProcessPaymentRequestValidator GetProcessPaymentRequestValidator()
    {
        return PayPalProcessPaymentRequestValidator.Instance;
    }

    public ProcessPaymentBaseResponse GetValidationFailedResponse(RequestValidationResult result)
    {
        return new ProcessPayPalPaymentResponse()
        {
            Status = "ValidationFailed",
            Error = result.Error
        };
    }
}

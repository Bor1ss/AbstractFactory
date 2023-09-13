using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.GooglePay;

public sealed class GooglePayPaymentFactory : IPaymentAbstractFactory
{
    public IPaymentClient GetPaymentClient()
    {
        return new GooglePayPaymentClient();
    }

    public IProcessPaymentRequestValidator GetProcessPaymentRequestValidator()
    {
        return GooglePayProcessPaymentRequestValidator.Instance;
    }

    public ProcessPaymentBaseResponse GetValidationFailedResponse(RequestValidationResult result)
    {
        return new ProcessGooglePayPaymentResponse()
        {
            Status = "ValidationFailed",
            Error = result.Error
        };
    }
}

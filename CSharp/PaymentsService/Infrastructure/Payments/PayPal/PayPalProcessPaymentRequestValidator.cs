using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.PayPal;

public sealed class PayPalProcessPaymentRequestValidator : IProcessPaymentRequestValidator
{
    private PayPalProcessPaymentRequestValidator() { }

    private static readonly Lazy<PayPalProcessPaymentRequestValidator> _lazyInstance = new(() => new PayPalProcessPaymentRequestValidator());
    public static PayPalProcessPaymentRequestValidator Instance => _lazyInstance.Value;

    public RequestValidationResult ValidateRequest(ProcessPaymentBaseRequest request)
    {
        if (request is not ProcessPayPalPaymentRequest req)
        {
            return new RequestValidationResult(false, "BadRequest");
        }

        if (string.IsNullOrEmpty(req.Token))
        {
            return new RequestValidationResult(false, "BadToken");
        }

        return new RequestValidationResult(true);
    }
}

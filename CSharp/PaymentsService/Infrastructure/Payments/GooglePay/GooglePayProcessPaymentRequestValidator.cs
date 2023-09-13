using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.GooglePay;

public sealed class GooglePayProcessPaymentRequestValidator : IProcessPaymentRequestValidator
{
    private GooglePayProcessPaymentRequestValidator() { }


    private static readonly Lazy<GooglePayProcessPaymentRequestValidator> _lazyInstance = new(() => new GooglePayProcessPaymentRequestValidator());
    public static GooglePayProcessPaymentRequestValidator Instance => _lazyInstance.Value;


    public RequestValidationResult ValidateRequest(ProcessPaymentBaseRequest request)
    {
        if (request is not ProcessGooglePayPaymentRequest req)
        {
            return new RequestValidationResult(false, "BadRequest");
        }

        if (string.IsNullOrEmpty(req.Email))
        {
            return new RequestValidationResult(false, "BadEmail");
        }

        if (string.IsNullOrEmpty(req.Token))
        {
            return new RequestValidationResult(false, "BadToken");
        }

        return new RequestValidationResult(true);
    }
}

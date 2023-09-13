using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.GooglePay;

public sealed class ProcessGooglePayPaymentRequest : ProcessPaymentBaseRequest
{
    public ProcessGooglePayPaymentRequest() 
        : base("GooglePay")
    {
    }

    public string Email { get; set; }
    public string Token { get; set; }
}

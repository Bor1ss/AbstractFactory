using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.GooglePay;
public sealed class ProcessGooglePayPaymentResponse : ProcessPaymentBaseResponse
{
    public ProcessGooglePayPaymentResponse()
        : base("GooglePay")
    {

    }

    public string TransactionId { get; set; }
    public string Email { get; set; }
}

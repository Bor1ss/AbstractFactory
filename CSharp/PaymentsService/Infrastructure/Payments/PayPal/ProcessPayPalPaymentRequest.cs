using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.PayPal;

public sealed class ProcessPayPalPaymentRequest : ProcessPaymentBaseRequest
{
    public ProcessPayPalPaymentRequest() 
        : base("PayPal")
    {
    }

    public string Token { get; set; }
}

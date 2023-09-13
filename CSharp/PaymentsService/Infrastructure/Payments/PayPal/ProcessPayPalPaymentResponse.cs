using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.PayPal;

public sealed class ProcessPayPalPaymentResponse : ProcessPaymentBaseResponse
{
    public ProcessPayPalPaymentResponse() 
        : base("PayPal")
    {

    }

    public string TransactionId { get; set; }
    public string Email { get; set; }
}

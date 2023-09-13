using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.CreditCard;
public sealed class ProcessCreditCardPaymentResponse : ProcessPaymentBaseResponse
{
    public ProcessCreditCardPaymentResponse() 
        : base("CreditCard")
    {
    }

    public string TransactionId { get; set; }
    public string ReceiptId { get; set; }
}

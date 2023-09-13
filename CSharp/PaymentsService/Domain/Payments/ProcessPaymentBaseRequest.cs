namespace PaymentsService.Domain.Payments;

public abstract class ProcessPaymentBaseRequest
{
    public ProcessPaymentBaseRequest(string paymentMethod)
    {
        PaymentMethod = paymentMethod;
    }

    public string PaymentMethod { get; set; }
    public string Currency { get; set; }
    public decimal Amount { get; set; }
}

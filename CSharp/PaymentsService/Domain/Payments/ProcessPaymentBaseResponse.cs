namespace PaymentsService.Domain.Payments;

public abstract class ProcessPaymentBaseResponse
{
    public ProcessPaymentBaseResponse(string paymentMethod)
    {
        PaymentMethod = paymentMethod;
    }

    public string PaymentMethod { get; set; }
    public string Status { get; set; }
    public string Error { get; set; }
}

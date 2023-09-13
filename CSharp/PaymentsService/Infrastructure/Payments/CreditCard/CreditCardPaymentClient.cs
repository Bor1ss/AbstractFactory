using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.CreditCard;

public sealed class CreditCardPaymentClient : IPaymentClient
{
    public ProcessPaymentBaseResponse ProcessPayment(ProcessPaymentBaseRequest request)
    {
        var req = request as ProcessCreditCardPaymentRequest ?? throw new ArgumentException();

        ProcessCreditCardPaymentResponse resp = new()
        {
            ReceiptId = $"Receipt {DateTime.UtcNow:yyyy-MM-dd}",
            TransactionId = Guid.NewGuid().ToString()
        };

        if (req.CardInfo.Type == "fail")
        {
            resp.Status = "Failed";
            resp.Error = "Generic error";
        }
        else
        {
            resp.Status = "Success";
        }

        return resp;
    }
}

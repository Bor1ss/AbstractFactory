using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.PayPal;

public sealed class PayPalPaymentClient : IPaymentClient
{
    public ProcessPaymentBaseResponse ProcessPayment(ProcessPaymentBaseRequest request)
    {
        var req = request as ProcessPayPalPaymentRequest ?? throw new ArgumentException();

        ProcessPayPalPaymentResponse resp = new()
        {
            Email = $"{req.Token}@paypal.com",
            TransactionId = Guid.NewGuid().ToString()
        };

        if(req.Token == "fail")
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

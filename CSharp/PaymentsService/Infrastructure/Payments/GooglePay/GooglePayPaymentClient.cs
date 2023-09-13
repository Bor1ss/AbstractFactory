using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.GooglePay;

public sealed class GooglePayPaymentClient : IPaymentClient
{
    public ProcessPaymentBaseResponse ProcessPayment(ProcessPaymentBaseRequest request)
    {
        var req = request as ProcessGooglePayPaymentRequest ?? throw new ArgumentException();

        ProcessGooglePayPaymentResponse resp = new()
        {
            Email = req.Email,
            TransactionId = Guid.NewGuid().ToString()
        };

        if (req.Token == "fail")
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

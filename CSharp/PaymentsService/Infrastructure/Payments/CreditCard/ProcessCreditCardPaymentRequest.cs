using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.CreditCard;

public sealed class ProcessCreditCardPaymentRequest : ProcessPaymentBaseRequest
{
    public ProcessCreditCardPaymentRequest() 
        : base("CreditCard")
    {
    }

    public CreditCardInfo CardInfo { get; set; }
}

public record CreditCardInfo(string FirstName, string LastName, string Number, string Type, int CVV, int ExpYear, int ExpMonth);
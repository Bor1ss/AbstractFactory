using PaymentsService.Domain.Payments;

namespace PaymentsService.Infrastructure.Payments.CreditCard;

public sealed class CreditCardProcessPaymentRequestValidator : IProcessPaymentRequestValidator
{
    private CreditCardProcessPaymentRequestValidator() { }


    private static readonly Lazy<CreditCardProcessPaymentRequestValidator> _lazyInstance = new(() => new CreditCardProcessPaymentRequestValidator());
    public static CreditCardProcessPaymentRequestValidator Instance => _lazyInstance.Value;


    public RequestValidationResult ValidateRequest(ProcessPaymentBaseRequest request)
    {
        if (request is not ProcessCreditCardPaymentRequest req || req.CardInfo is null)
        {
            return new RequestValidationResult(false, "BadRequest");
        }

        List<string> errors = new(7);

        if (string.IsNullOrEmpty(req.CardInfo.FirstName))
        {
            errors.Add("BadFirstName");
        }

        if (string.IsNullOrEmpty(req.CardInfo.LastName))
        {
            errors.Add("BadLastName");
        }

        if (string.IsNullOrEmpty(req.CardInfo.Type))
        {
            errors.Add("BadType");
        }

        if (string.IsNullOrEmpty(req.CardInfo.Number) || req.CardInfo.Number.Length < 12)
        {
            errors.Add("BadNumber");
        }

        if (req.CardInfo.CVV < 100 || req.CardInfo.CVV > 1000)
        {
            errors.Add("BadCVV");
        }

        if(req.CardInfo.ExpYear < DateTime.UtcNow.Year)
        {
            errors.Add("BadExp");
        }
        else if (req.CardInfo.ExpYear == DateTime.UtcNow.Year && req.CardInfo.ExpMonth < DateTime.UtcNow.Month)
        {
            errors.Add("BadExp");
        }

        if(errors.Any())
        {
            return new RequestValidationResult(false, string.Join(", ", errors));
        }

        return new RequestValidationResult(true);
    }
}

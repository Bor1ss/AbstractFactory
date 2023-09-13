namespace PaymentsService.Domain.Payments;

public interface IProcessPaymentRequestValidator
{
    RequestValidationResult ValidateRequest(ProcessPaymentBaseRequest request);
}

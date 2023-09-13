namespace PaymentsService.Domain.Payments;

public interface IPaymentAbstractFactory
{
    IPaymentClient GetPaymentClient();
    IProcessPaymentRequestValidator GetProcessPaymentRequestValidator();
    ProcessPaymentBaseResponse GetValidationFailedResponse(RequestValidationResult result);
}

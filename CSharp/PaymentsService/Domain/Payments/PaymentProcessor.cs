using PaymentsService.Domain.Logging;
using PaymentsService.Domain.Statistics;

namespace PaymentsService.Domain.Payments;

public sealed class PaymentProcessor
{
    private readonly IPaymentAbstractFactory _factory;
    private readonly IStatisticsService _statisticsService;
    private readonly IBaseLogger _logger;

    public PaymentProcessor(IPaymentAbstractFactory factory, IStatisticsService statisticsService, IBaseLogger baseLogger)
    {
        _factory = factory;
        _statisticsService = statisticsService;
        _logger = baseLogger;
    }

    public ProcessPaymentBaseResponse ProcessPayment(ProcessPaymentBaseRequest request)
    {
        _logger.Log("Processing request", request);

        var validator = _factory.GetProcessPaymentRequestValidator();

        var validationResult = validator.ValidateRequest(request);

        if(!validationResult.IsValid)
        {
            _logger.Log("Validation failed");
            return _factory.GetValidationFailedResponse(validationResult);
        }

        var client = _factory.GetPaymentClient();

        ProcessPaymentBaseResponse paymentResult = client.ProcessPayment(request);

        _statisticsService.CountStatistics(request, paymentResult);

        _logger.Log("Processing request finished with result", paymentResult);

        return paymentResult;
    }
}

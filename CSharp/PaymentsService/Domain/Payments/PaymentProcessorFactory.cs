using PaymentsService.Domain.Logging;
using PaymentsService.Domain.Statistics;

namespace PaymentsService.Domain.Payments;

public class PaymentProcessorFactory
{
    private readonly IStatisticsService _statisticsService;
    private readonly IBaseLogger _baseLogger;

    public PaymentProcessorFactory(IStatisticsService statisticsService, 
        IBaseLogger baseLogger)
    {
        _statisticsService = statisticsService;
        _baseLogger = baseLogger;
    }

    public PaymentProcessor GetPaymentProcessor<T>() 
        where T : IPaymentAbstractFactory, new()
    {
        return new PaymentProcessor(new T(), _statisticsService, _baseLogger);
    }
}

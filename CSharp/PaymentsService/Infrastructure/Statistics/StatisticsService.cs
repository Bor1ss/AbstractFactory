using PaymentsService.Domain.Payments;
using PaymentsService.Domain.Statistics;

namespace PaymentsService.Infrastructure.Statistics;

public class StatisticsService : IStatisticsService
{
    private readonly List<object> _statistics = new();

    public void CountStatistics(ProcessPaymentBaseRequest request, ProcessPaymentBaseResponse response)
    {
        _statistics.Add(new {request, response});
    }
}

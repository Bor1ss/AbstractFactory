using PaymentsService.Domain.Payments;

namespace PaymentsService.Domain.Statistics;

public interface IStatisticsService
{
    void CountStatistics(ProcessPaymentBaseRequest request, ProcessPaymentBaseResponse response);
}

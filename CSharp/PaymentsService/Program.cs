using PaymentsService.Domain.Logging;
using PaymentsService.Domain.Payments;
using PaymentsService.Domain.Statistics;
using PaymentsService.Infrastructure.Logging;
using PaymentsService.Infrastructure.Payments.CreditCard;
using PaymentsService.Infrastructure.Payments.GooglePay;
using PaymentsService.Infrastructure.Payments.PayPal;
using PaymentsService.Infrastructure.Statistics;

namespace PaymentsService;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddSingleton<IStatisticsService, StatisticsService>();
        builder.Services.AddSingleton<IBaseLogger, ConsoleLogger>();
        builder.Services.AddSingleton<PaymentProcessorFactory>();
        var app = builder.Build();

        app.MapPost("/paypal/process", (ProcessPayPalPaymentRequest request, PaymentProcessorFactory paymentProcessorFactory) =>
        {
            var paymentProcessor = paymentProcessorFactory.GetPaymentProcessor<PayPalPaymentFactory>();
            return paymentProcessor.ProcessPayment(request);
        });

        app.MapPost("/googlepay/process", (ProcessGooglePayPaymentRequest request, PaymentProcessorFactory paymentProcessorFactory) =>
        {
            var paymentProcessor = paymentProcessorFactory.GetPaymentProcessor<GooglePayPaymentFactory>();
            return paymentProcessor.ProcessPayment(request);
        });

        app.MapPost("/creditcard/process", (ProcessCreditCardPaymentRequest request, PaymentProcessorFactory paymentProcessorFactory) =>
        {
            var paymentProcessor = paymentProcessorFactory.GetPaymentProcessor<CreditCardPaymentFactory>();
            return paymentProcessor.ProcessPayment(request);
        });

        app.Run();
    }
}

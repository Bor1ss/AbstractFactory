using PaymentsService.Domain.Logging;

namespace PaymentsService.Infrastructure.Logging;

public class ConsoleLogger : IBaseLogger
{
    public void Log(string message) => Console.WriteLine(message);

    public void Log<T>(T @object) => Log(Newtonsoft.Json.JsonConvert.SerializeObject(@object));

    public void Log<T>(string message, T @object)
    {
        Log(message);
        Log(@object);
    }
}

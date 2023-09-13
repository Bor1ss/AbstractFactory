namespace PaymentsService.Domain.Logging;

public interface IBaseLogger
{
    void Log(string message);
    void Log<T>(T @object);
    void Log<T>(string message, T @object);
}

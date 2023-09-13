namespace PaymentsService.Domain.Payments;

public record RequestValidationResult(bool IsValid, string? Error = null);

from Domain.Logging.IBaseLogger import IBaseLogger
from Domain.Payments.IPaymentAbstractFactory import IPaymentAbstractFactory
from Domain.Payments.ProcessPaymentBaseRequest import ProcessPaymentBaseRequest
from Domain.Payments.ProcessPaymentBaseResponse import ProcessPaymentBaseResponse
from Domain.Statistics.IStatisticsService import IStatisticsService


class PaymentProcessor:
    def __init__(self, factory: IPaymentAbstractFactory, statistics_service: IStatisticsService, logger: IBaseLogger):
        self._factory = factory
        self._statistics_service = statistics_service
        self._logger = logger

    def process_payment(self, request: ProcessPaymentBaseRequest) -> ProcessPaymentBaseResponse:
        self._logger.log_message_and_object("Processing request", request)

        validator = self._factory.get_process_payment_request_validator()

        validation_result = validator.validate_request(request)

        if not validation_result.is_valid:
            self._logger.log("Validation failed")
            return self._factory.get_validation_failed_response(validation_result)

        client = self._factory.get_payment_client()

        payment_result = client.process_payment(request)

        self._statistics_service.count_statistics(request, payment_result)

        self._logger.log_message_and_object("Processing request finished with result", payment_result)

        return payment_result

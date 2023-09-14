from Domain.Logging.IBaseLogger import IBaseLogger
from Domain.Payments.IPaymentAbstractFactory import IPaymentAbstractFactory
from Domain.Payments.PaymentProcessor import PaymentProcessor
from Domain.Statistics.IStatisticsService import IStatisticsService


class PaymentProcessorFactory:
    def __init__(self, statistics_service: IStatisticsService, base_logger: IBaseLogger):
        self._statistics_service = statistics_service
        self._base_logger = base_logger

    def get_payment_processor(self, factory_type):
        if issubclass(factory_type, IPaymentAbstractFactory):
            factory_instance = factory_type()
            return PaymentProcessor(factory_instance, self._statistics_service, self._base_logger)
        else:
            raise ValueError("factory_type must be a subclass of IPaymentAbstractFactory")

from abc import ABC, abstractmethod

class IStatisticsService(ABC):
    @abstractmethod
    def count_statistics(self, request, response):
        pass
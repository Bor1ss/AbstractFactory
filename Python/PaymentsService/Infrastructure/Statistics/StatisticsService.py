from Domain.Statistics.IStatisticsService import IStatisticsService
from typing import List

class StatisticsService(IStatisticsService):
    def __init__(self):
        self._statistics = []

    def count_statistics(self, request, response):
        self._statistics.append({'request': request, 'response': response})


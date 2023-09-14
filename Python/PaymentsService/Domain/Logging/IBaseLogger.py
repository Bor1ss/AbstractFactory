from abc import ABC, abstractmethod

class IBaseLogger(ABC):
    @abstractmethod
    def log(self, message):
        pass

    @abstractmethod
    def log_object(self, obj):
        pass

    @abstractmethod
    def log_message_and_object(self, message, obj):
        pass
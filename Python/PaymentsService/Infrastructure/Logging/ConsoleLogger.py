from Domain.Logging.IBaseLogger import IBaseLogger


class ConsoleLogger(IBaseLogger):
    def log(self, message):
        print(message)

    def log_object(self, obj):
        print(obj)

    def log_message_and_object(self, message, obj):
        print(f"{message}: {obj}")
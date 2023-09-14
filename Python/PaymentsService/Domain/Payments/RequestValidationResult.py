class RequestValidationResult:
    def __init__(self, is_valid, error=None):
        self.is_valid = is_valid
        self.error = error
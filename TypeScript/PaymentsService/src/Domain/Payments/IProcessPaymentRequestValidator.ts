import { RequestValidationResult } from './RequestValidationResult'
import { ProcessPaymentBaseRequest } from './ProcessPaymentBaseRequest'

export interface IProcessPaymentRequestValidator {
    validateRequest(request: ProcessPaymentBaseRequest): RequestValidationResult;
}
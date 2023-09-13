import { ProcessPaymentBaseRequest } from '../Payments/ProcessPaymentBaseRequest'
import { ProcessPaymentBaseResponse } from '../Payments/ProcessPaymentBaseResponse'

export interface IStatisticsService {
    countStatistics(req: ProcessPaymentBaseRequest, resp: ProcessPaymentBaseResponse) : void
}


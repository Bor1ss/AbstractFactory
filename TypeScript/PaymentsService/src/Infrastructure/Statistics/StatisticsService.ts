import { injectable } from "tsyringe";
import { ProcessPaymentBaseRequest } from "../../Domain/Payments/ProcessPaymentBaseRequest";
import { ProcessPaymentBaseResponse } from "../../Domain/Payments/ProcessPaymentBaseResponse";
import { IStatisticsService } from "../../Domain/Statistics/IStatisticsService";

@injectable()
export class StatisticsService implements IStatisticsService {
    private statistics: any[] = [];

    countStatistics(req: ProcessPaymentBaseRequest, resp: ProcessPaymentBaseResponse): void {
        this.statistics.push({req, resp})
    }
}
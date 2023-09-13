export abstract class ProcessPaymentBaseRequest {
    constructor(public paymentMethod: string) {}
  
    public currency?: string;
    public amount?: number;
}
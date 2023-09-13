export interface ProcessPaymentBaseRequest {
     paymentMethod: string
     currency?: string;
     amount?: number;
}
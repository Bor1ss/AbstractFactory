export abstract class ProcessPaymentBaseResponse {
    constructor(public paymentMethod: string) {}
  
    public status?: string;
    public error?: string | null | undefined;
  }
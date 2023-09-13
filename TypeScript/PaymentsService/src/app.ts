import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { container, injectable, inject } from 'tsyringe';
import { IBaseLogger } from './Domain/Logging/IBaseLogger';
import { ConsoleLogger } from './Infrastructure/Logging/ConsoleLogger' 
import { IStatisticsService } from './Domain/Statistics/IStatisticsService';
import { StatisticsService } from './Infrastructure/Statistics/StatisticsService';
import { PaymentProcessorFactory } from './Domain/Payments/PaymentProcessorFactory';
import { ProcessPayPalPaymentRequest } from './Infrastructure/Payments/PayPal/ProcessPayPalPaymentRequest';
import { PayPalPaymentFactory } from './Infrastructure/Payments/PayPal/PayPalPaymentFactory';
import { GooglePayPaymentFactory } from './Infrastructure/Payments/GooglePay/GooglePayPaymentFactory';
import { ProcessGooglePayPaymentRequest } from './Infrastructure/Payments/GooglePay/ProcessGooglePayPaymentRequest';
import { CreditCardPaymentFactory } from './Infrastructure/Payments/CreditCard/CreditCardPaymentFactory';
import { ProcessCreditCardPaymentRequest } from './Infrastructure/Payments/CreditCard/ProcessCreditCardPaymentRequest';

const app = express();
const port = 3000; // Change this to your desired port

app.use(express.json());

container.register<IBaseLogger>('Logger', {
    useClass: ConsoleLogger,
});
container.register<IStatisticsService>('StatisticsService', {
    useClass: StatisticsService,
});
container.register<PaymentProcessorFactory>('PaymentProcessorFactory', {
    useClass: PaymentProcessorFactory
});



app.post('/paypal/process', (req: Request, res: Response) => {
  const ppRequest: ProcessPayPalPaymentRequest = req.body as ProcessPayPalPaymentRequest;

  const paymentProcessorFactory = container.resolve(PaymentProcessorFactory);
  const paymentProcessor = paymentProcessorFactory.getPaymentProcessor(PayPalPaymentFactory);
  const resp = paymentProcessor.processPayment(ppRequest);

  res.json(resp);
});

app.post('/googlepay/process', (req: Request, res: Response) => {
  const gpRequest = req.body as ProcessGooglePayPaymentRequest;
  
  const paymentProcessorFactory = container.resolve(PaymentProcessorFactory);
  const paymentProcessor = paymentProcessorFactory.getPaymentProcessor(GooglePayPaymentFactory);
  const resp = paymentProcessor.processPayment(gpRequest);

  res.json(resp);
});

app.post('/creditcard/process', (req: Request, res: Response) => {
    const ccRequest = req.body as ProcessCreditCardPaymentRequest;
    
    const paymentProcessorFactory = container.resolve<PaymentProcessorFactory>("PaymentProcessorFactory");
    const paymentProcessor = paymentProcessorFactory.getPaymentProcessor(CreditCardPaymentFactory);
    const resp = paymentProcessor.processPayment(ccRequest);
  
    res.json(resp);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
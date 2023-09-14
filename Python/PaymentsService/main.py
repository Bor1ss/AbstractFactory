from flask import Flask, request, jsonify
import json
from Domain.Payments.PaymentProcessorFactory import PaymentProcessorFactory
from Infrastructure.Logging.ConsoleLogger import ConsoleLogger
from Infrastructure.Payments.CreditCard.CreditCardPaymentFactory import CreditCardPaymentFactory
from Infrastructure.Payments.CreditCard.ProcessCreditCardPaymentRequest import ProcessCreditCardPaymentRequest
from Infrastructure.Payments.GooglePay.GooglePayPaymentFactory import GooglePayPaymentFactory
from Infrastructure.Payments.GooglePay.ProcessGooglePayPaymentRequest import ProcessGooglePayPaymentRequest
from Infrastructure.Payments.PayPal.PayPalPaymentFactory import PayPalPaymentFactory
from Infrastructure.Payments.PayPal.ProcessPayPalPaymentRequest import ProcessPayPalPaymentRequest

from Infrastructure.Statistics.StatisticsService import StatisticsService

app = Flask(__name__)
port = 3000  # Change this to your desired port

statistics_service = StatisticsService()
logger = ConsoleLogger()
payment_processor_factory = PaymentProcessorFactory(statistics_service, logger)

@app.route('/paypal/process', methods=['POST'])
def process_paypal_payment():
    pp_request = ProcessPayPalPaymentRequest(**request.json)
    payment_processor = payment_processor_factory.get_payment_processor(PayPalPaymentFactory)
    resp = payment_processor.process_payment(pp_request)

    return jsonify(resp.to_dict())

@app.route('/googlepay/process', methods=['POST'])
def process_googlepay_payment():    
    gp_request = ProcessGooglePayPaymentRequest(**request.json)
    payment_processor = payment_processor_factory.get_payment_processor(GooglePayPaymentFactory)
    resp = payment_processor.process_payment(gp_request)

    return jsonify(resp.to_dict())

@app.route('/creditcard/process', methods=['POST'])
def process_creditcard_payment():    
    cc_request = ProcessCreditCardPaymentRequest(**request.json)
    payment_processor = payment_processor_factory.get_payment_processor(CreditCardPaymentFactory)
    resp = payment_processor.process_payment(cc_request)

    return jsonify(resp.to_dict())

if __name__ == '__main__':
    app.run(port=port)
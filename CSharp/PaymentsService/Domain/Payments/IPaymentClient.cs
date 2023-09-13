using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaymentsService.Domain.Payments;
public interface IPaymentClient
{
    ProcessPaymentBaseResponse ProcessPayment(ProcessPaymentBaseRequest request);
}

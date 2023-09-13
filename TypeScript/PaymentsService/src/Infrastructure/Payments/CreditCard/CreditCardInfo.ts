export class CreditCardInfo {
    constructor(
      public firstName: string,
      public lastName: string,
      public number: string,
      public type: string,
      public cvv: number,
      public expYear: number,
      public expMonth: number
    ) {}
  }